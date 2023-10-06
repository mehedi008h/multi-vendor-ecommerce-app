import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AccessTokenGuard } from 'src/auth/guards/access_token.guard';
import { CurrentUser } from './decorators/user.decorator';

@Controller('user')
export class UserController {
  constructor() {}

  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/profile')
  public async getUser(@CurrentUser() user: User) {
    return user;
  }
}
