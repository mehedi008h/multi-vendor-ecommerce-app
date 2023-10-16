import {
  Controller,
  UseGuards,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { AccessTokenGuard } from 'src/auth/guards/access_token.guard';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { User } from '@prisma/client';
import { CreateShopDto } from './dto/createShop.dto';
import { ShopResponseInterface } from './types/shopResponse.interface';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  // create shop
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createShop(
    @CurrentUser() currentUser: User,
    @Body() createShopDto: CreateShopDto,
  ): Promise<ShopResponseInterface> {
    // create shop
    return await this.shopService.createShop(currentUser.id, createShopDto);
  }
}
