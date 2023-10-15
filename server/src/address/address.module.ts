import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { UserService } from 'src/user/user.service';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    UserService,
    AddressService,
    AuthService,
    PrismaService,
    JwtService,
  ],
  controllers: [AddressController],
})
export class AddressModule {}
