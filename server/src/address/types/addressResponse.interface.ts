import { $Enums, Address } from '@prisma/client';
export class AddressResponseInterface implements Address {
  id: number;
  country: string;
  city: string;
  address1: string;
  address2: string;
  zipCode: string;
  addressType: $Enums.AddressType;
  userId: number;
  shopId: number;
}
