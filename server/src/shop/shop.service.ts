import { Injectable } from '@nestjs/common';
import { Shop } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { CreateShopDto } from './dto/createShop.dto';

@Injectable()
export class ShopService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  // create shop
  async createShop(
    userId: number,
    createShopDto: CreateShopDto,
  ): Promise<Shop> {
    // check user exists
    const user = await this.userService.findOneById(userId);
    const shop = await this.prisma.shop.create({
      data: {
        shopName: createShopDto.shopName,
        description: createShopDto.description,
        mails: createShopDto.mails,
        phones: createShopDto.phones,
        socialLinks: createShopDto.socialLinks,
        shopType: createShopDto.shopType,
        shopOwnerId: user.id,
      },
    });

    return shop;
  }
}
