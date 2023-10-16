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
} from '@nestjs/common';
import { AddressService } from './address.service';
import { AddAddressDto } from './dto/addAddress.dto';
import { AddressResponseInterface } from './types/addressResponse.interface';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { User } from '@prisma/client';
import { AccessTokenGuard } from 'src/auth/guards/access_token.guard';

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
