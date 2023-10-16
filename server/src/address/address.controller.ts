import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Delete,
  Param,
  ParseIntPipe,
  Put,
  Get,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { AddAddressDto } from './dto/addAddress.dto';
import { AddressResponseInterface } from './types/addressResponse.interface';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { User } from '@prisma/client';
import { AccessTokenGuard } from 'src/auth/guards/access_token.guard';
import { UpdateAddressDto } from './dto/updateAddress.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  // add user address
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/add-user')
  @UsePipes(new ValidationPipe())
  async addUserAddress(
    @CurrentUser() currentUser: User,
    @Body() addAddressDto: AddAddressDto,
  ): Promise<AddressResponseInterface> {
    // add address
    const address = await this.addressService.addUserAddress(
      currentUser.id,
      addAddressDto,
    );
    return address;
  }

  // get user address details
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/user')
  @UsePipes(new ValidationPipe())
  async getUserAlAddress(
    @CurrentUser() currentUser: User,
  ): Promise<AddressResponseInterface[]> {
    // get address
    return await this.addressService.getUserAllAddress(currentUser.id);
  }

  // get user address details
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/details/:id')
  @UsePipes(new ValidationPipe())
  async getUserAddress(
    @CurrentUser() currentUser: User,
    @Param(`id`, ParseIntPipe) id: number,
  ): Promise<AddressResponseInterface> {
    // get address
    return await this.addressService.getUserAddress(currentUser.id, id);
  }

  // update user address
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Put('/update-user')
  @UsePipes(new ValidationPipe())
  async updateUserAddress(
    @CurrentUser() currentUser: User,
    @Body() updateAddressDto: UpdateAddressDto,
  ): Promise<AddressResponseInterface> {
    // update address
    return await this.addressService.updateUserAddress(
      currentUser.id,
      updateAddressDto,
    );
  }

  // delete user address
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Delete('/delete-user/:id')
  @UsePipes(new ValidationPipe())
  async deleteUserAddress(
    @CurrentUser() currentUser: User,
    @Param(`id`, ParseIntPipe) id: number,
  ): Promise<AddressResponseInterface> {
    // delete address
    return await this.addressService.deleteUserAddress(currentUser.id, id);
  }
}
