import { Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { AddAddressDto } from './dto/addAddress.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AddressService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  // add addess to user account
  async addUserAddress(
    userId: number,
    addAddressDto: AddAddressDto,
  ): Promise<Address> {
    // check user exists
    const user = await this.userService.findOneById(userId);
    const address = await this.prisma.address.create({
      data: {
        country: addAddressDto.country,
        city: addAddressDto.city,
        zipCode: addAddressDto.zipCode,
        address1: addAddressDto.address1,
        address2: addAddressDto.address2,
        addressType: addAddressDto.addressType,
        userId: user.id,
      },
      include: {
        user: true,
      },
    });

    return address;
  }
}
