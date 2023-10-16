import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [AuthModule, UserModule, AddressModule, ShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
