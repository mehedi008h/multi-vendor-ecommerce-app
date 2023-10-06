import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // update user
  async updateUser(
    userId: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    console.log('Id: ' + updateUserDto);

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
