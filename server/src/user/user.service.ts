import {
  ConflictException,
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  // update user
  async updateUser(
    userId: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    // check user exists
    const user = await this.findOneById(userId);

    const updateUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: updateUserDto,
    });

    return updateUser;
  }

  // change password
  async changePassword(
    userId: number,
    changePasswordDto: ChangePasswordDto,
  ): Promise<User> {
    // check user exists
    const user = await this.findOneById(userId);

    // check old password is correct
    const isMatch = await this.authService.comparePassword(
      changePasswordDto.oldPassword,
      user.password,
    );

    if (!isMatch) throw new ConflictException('Old password is incorrect');

    // Check new password and confirm password are the same
    if (changePasswordDto.confirmPassword !== changePasswordDto.password)
      throw new ConflictException(
        'New Password and Confirm Password are not the same',
      );

    // hased password
    const hashedPassword = await this.authService.hashPassword(
      changePasswordDto.password,
    );

    // update password
    const updateUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return updateUser;
  }

  // find user by email
  async findOneByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      // we will throw some custom exception later
      throw new NotFoundException('User not found with this email address');
    }
    return user;
  }

  // find user by id
  async findOneById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      // we will throw some custom exception later
      throw new NotFoundException('User not found with this id');
    }
    return user;
  }
}
