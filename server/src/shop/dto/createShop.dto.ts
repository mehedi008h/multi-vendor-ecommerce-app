import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShopDto {
  @IsNotEmpty({ message: 'Shop name is required.' })
  @IsString({ message: 'Shop name must be a string.' })
  readonly shopName: string;

  @IsNotEmpty({ message: 'Description is required.' })
  @IsString({ message: 'Description must be a string.' })
  readonly description: string;

  @IsNotEmpty({ message: 'Email is required.' })
  readonly mails: Prisma.JsonValue;

  @IsNotEmpty({ message: 'Phone is required.' })
  readonly phones: Prisma.JsonValue;

  @IsNotEmpty({ message: 'Social Links is required.' })
  readonly socialLinks: Prisma.JsonValue;

  @IsNotEmpty({ message: 'Shop Type is required.' })
  @IsString({ message: 'Shop Type must be a string.' })
  readonly shopType: string;
}
