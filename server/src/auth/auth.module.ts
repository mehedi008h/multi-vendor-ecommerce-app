import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { RefreshTokenJwtStrategy } from './strategies/refresh_jwt-strategy';
import { AccessTokenJwtStrategy } from './strategies/access_jwt-strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    // dynamic initialize of jwt module by passing config
    JwtModule.register({}),
    forwardRef(() => UserModule),
  ],
  providers: [
    AuthService,
    PrismaService,
    UserService,
    JwtService,
    RefreshTokenJwtStrategy,
    AccessTokenJwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
