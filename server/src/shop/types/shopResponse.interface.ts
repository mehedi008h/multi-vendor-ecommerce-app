import { Prisma, Shop } from '@prisma/client';
export class ShopResponseInterface implements Shop {
  id: number;
  shopName: string;
  description: string;
  logoUrl: Prisma.JsonValue;
  coverUrl: Prisma.JsonValue;
  images: Prisma.JsonValue;
  mails: Prisma.JsonValue;
  phones: Prisma.JsonValue;
  socialLinks: Prisma.JsonValue;
  totalSell: number;
  returnPolicy: number;
  moneyBackPolicy: boolean;
  verifiedAt: Date;
  secret: string;
  positiveRating: number;
  shipOnTime: number;
  chatResponse: number;
  shopType: string;
  shopOwnerId: number;
  active: boolean;
  block: boolean;
  createdAt: Date;
  updatedAt: Date;
  resetSecretToken: string;
  resetSecretExpire: Date;
}
