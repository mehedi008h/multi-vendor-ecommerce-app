import { IsNotEmpty, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty({ message: 'Old Password is required.' })
  @MinLength(8, { message: 'Old Password must be at least 8 characters.' })
  readonly oldPassword: string;

  @IsNotEmpty({ message: 'New Password is required.' })
  @MinLength(8, { message: 'New Password must be at least 8 characters.' })
  readonly password: string;

  @IsNotEmpty({ message: 'Confirm Password is required.' })
  @MinLength(8, { message: 'Confirm Password must be at least 8 characters.' })
  readonly confirmPassword: string;
}
