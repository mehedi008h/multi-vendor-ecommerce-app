import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
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
  async createUser(
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
}
