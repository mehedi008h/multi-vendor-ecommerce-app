import { $Enums } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddAddressDto {
  @IsNotEmpty({ message: 'Country name is required.' })
  @IsString({ message: 'Country name must be a string.' })
  readonly country: string;

  @IsNotEmpty({ message: 'City name is required.' })
  @IsString({ message: 'City name must be a string.' })
  readonly city: string;

  @IsNotEmpty({ message: 'Zip Code is required.' })
  @IsString({ message: 'Zip Code must be a string.' })
  readonly zipCode: string;

  @IsNotEmpty({ message: 'Address 1 is required.' })
  @IsString({ message: 'Address 1 must be a string.' })
  readonly address1: string;

  readonly address2: string;

  @IsString({ message: 'Address type must be a string.' })
  readonly addressType: $Enums.AddressType;
}
