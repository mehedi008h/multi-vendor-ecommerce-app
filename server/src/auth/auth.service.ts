import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/createUser.dto';
import { User } from '@prisma/client';
import { UserResponseInterface } from './types/userResponse.interface';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // create user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const errorResponse = {
      errors: {},
    };

    const userByEmail = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (userByEmail) {
      errorResponse.errors['email'] =
        'An account with that email already exists!';
    }

    if (userByEmail) {
      throw new HttpException(errorResponse, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    // hased password
    const hashedPassword = await this.hashPassword(createUserDto.password);

    return await this.prisma.user.create({
      data: {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        password: hashedPassword,
      },
    });
  }

  // create hashed password
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  buildUserResponse(user: User): UserResponseInterface {
    return {
      user: {
        ...user,
        token: 'dsfdsf',
      },
    };
  }
}
