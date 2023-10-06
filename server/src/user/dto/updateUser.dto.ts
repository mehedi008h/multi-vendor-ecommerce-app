import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'First name must be a string.' })
  readonly firstName: string;

  @IsString({ message: 'Last name must be a string.' })
  readonly lastName: string;

  @IsString({ message: 'Phone must be a string.' })
  readonly phone: string;
}
