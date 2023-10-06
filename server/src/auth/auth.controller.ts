import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  Response,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { LoginUserDto } from './dto/loginUser.dto';
import { RefreshTokenGuard } from './guards/refresh_token.guard';
import { AccessTokenGuard } from './guards/access_token.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // register user
  @HttpCode(HttpStatus.OK)
  @Post('/signup')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.authService.createUser(createUserDto);
    return user;
  }

  // login user
  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  public async CreateUser(
    @Body() body: LoginUserDto,
    @Request() req,
    @Response() res,
  ) {
    const response = await this.authService.validateUserByPassword(body);
    res.cookie('access_token', response.access_token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    res.cookie('refresh_token', response.refresh_token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.send(response);
  }

  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/logout')
  public async logout(@Request() req, @Response() res) {
    res.cookie('access_token', '', {
      httpOnly: true,
      sameSite: 'lax',
    });
    res.cookie('refresh_token', '', {
      httpOnly: true,
      sameSite: 'lax',
    });
    await this.authService.logout(req.user);
    return res.send();
  }

  @UseGuards(RefreshTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/refresh')
  public async refreshToken(@Req() req: any) {
    const user = req.user;
    return await this.authService.refreshToken(user);
  }
}
