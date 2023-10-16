import { Injectable, NotFoundException } from '@nestjs/common';
import { Address } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { AddAddressDto } from './dto/addAddress.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateAddressDto } from './dto/updateAddress.dto';

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
    });

    return address;
  }

  // get user all address
  async getUserAllAddress(userId: number): Promise<Address[]> {
    // check user exists
    const user = await this.userService.findOneById(userId);

    // find user addresses
    return await this.prisma.address.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  // get user address details
  async getUserAddress(userId: number, addressId: number): Promise<Address> {
    // check user exists
    const user = await this.userService.findOneById(userId);
    const address = await this.prisma.address.findUnique({
      where: {
        id: addressId,
        userId: user.id,
      },
    });

    if (!address) {
      // we will throw some custom exception later
      throw new NotFoundException('Address not found');
    }

    return address;
  }

  // update user address
  async updateUserAddress(
    userId: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    // check user exists
    const user = await this.userService.findOneById(userId);
    return await this.prisma.address.update({
      where: {
        id: updateAddressDto.id,
        userId: user.id,
      },
      data: updateAddressDto,
    });
  }

  // delete user address
  async deleteUserAddress(userId: number, addressId: number): Promise<Address> {
    // check user exists
    const user = await this.userService.findOneById(userId);
    return await this.prisma.address.delete({
      where: {
        id: addressId,
        userId: user.id,
      },
    });
  }
}
