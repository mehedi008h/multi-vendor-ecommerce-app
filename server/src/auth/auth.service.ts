import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  ConflictException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto } from './dto/createUser.dto';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/loginUser.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // create user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email.toLowerCase(),
      },
    });

    if (existingUser) {
      throw new ConflictException('User with email already exists');
    }

    // hased password
    const hashedPassword = await this.hashPassword(createUserDto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
          email: createUserDto.email,
          password: hashedPassword,
        },
      });
      return user;
    } catch (err) {
      throw new ConflictException(`User already exist with same email`);
    }
  }

  // login
  async validateUserByPassword(payload: LoginUserDto) {
    const { email, password } = payload;
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      // we will throw some custom exception later
      throw new NotFoundException();
    }

    let isMatch = false;

    isMatch = await this.comparePassword(password, user.password);

    if (isMatch) {
      const data = await this.createToken(user);
      await this.updateRefreshToken(user.email, data.refresh_token);
      return data;
    } else {
      throw new NotFoundException(`User with email password not found`);
    }
  }

  // create hashed password
  public async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  // update refress token
  private async updateRefreshToken(email: string, refToken: string) {
    await this.updateRefreshTokenByEmail(email, refToken);
  }

  public async validateJwtPayload(payload: JwtPayload) {
    const data = await this.userService.findOneByEmail(payload.email);
    delete data.password;
    return data;
  }

  // logout
  public async logout(user: User) {
    await this.updateRefreshTokenByEmail(user.email, null);
  }

  // create refresh token
  public async refreshToken(user: User) {
    const { refreshToken, email } = user;
    const userData = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!userData) {
      throw new ForbiddenException();
    }
    const isMatchFound = await bcrypt.compare(
      refreshToken,
      userData.refreshToken,
    );
    if (!isMatchFound) {
      throw new ForbiddenException();
    }
    const tokens = await this.createToken(user);
    await this.updateRefreshToken(user.email, tokens.refresh_token);
    return tokens;
  }

  // create access token
  public async createToken(user: User) {
    const data: JwtPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(data, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        expiresIn: '1d',
      }),
      this.jwtService.signAsync(data, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        expiresIn: '1d',
      }),
    ]);
    return {
      ...data,
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  // update refress token
  private async updateRefreshTokenByEmail(email: string, refToken: string) {
    if (!refToken) {
      const user = await this.userService.findOneByEmail(email.toLowerCase());
      const saveEntity = { ...user, refreshToken: null };
      return await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: saveEntity,
      });
    }

    // hash new token
    const hashedToken = await this.hashData(refToken);
    const user = await this.userService.findOneByEmail(email.toLowerCase());
    const saveEntity = { ...user, refreshToken: hashedToken };
    return await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: saveEntity,
    });
  }

  // hasing data
  hashData(token: string) {
    return bcrypt.hash(token, 10);
  }

  // compare password
  public async comparePassword(enteredPassword, dbPassword) {
    return await bcrypt.compare(enteredPassword, dbPassword);
  }
}
