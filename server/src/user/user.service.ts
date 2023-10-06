import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // update refress token
  async updateRefreshTokenByEmail(email: string, refToken: string) {
    if (!refToken) {
      const user = await this.findOneByEmail(email.toLowerCase());
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
    const user = await this.findOneByEmail(email.toLowerCase());
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

  // find user by email
  async findOneByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
