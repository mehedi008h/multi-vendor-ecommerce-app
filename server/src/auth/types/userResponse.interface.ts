import { $Enums, Prisma, User } from '@prisma/client';
export class UserResponseInterface implements User {
  coin: number;
  refreshToken: string;
  id: number;
  firstName: string;
  lastName: string;
  avatarUrl: Prisma.JsonValue;
  email: string;
  phone: string;
  emailVerifiedAt: Date;
  password: string;
  role: $Enums.Role;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
}
