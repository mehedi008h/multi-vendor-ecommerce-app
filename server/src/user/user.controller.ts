import {
  Body,
  Controller,
  Get,
  Put,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AccessTokenGuard } from 'src/auth/guards/access_token.guard';
import { CurrentUser } from './decorators/user.decorator';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
import { UserResponseInterface } from 'src/auth/types/userResponse.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // get current logged-in user
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/profile')
  public async getUser(@CurrentUser() user: User) {
    return user;
  }

  // update current logged-in user
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Put('/update')
  public async updateUser(
    @CurrentUser() currentUser: User,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseInterface> {
    return this.userService.updateUser(currentUser.id, updateUserDto);
  }
}
