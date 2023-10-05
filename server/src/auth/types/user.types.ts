import { $Enums, Prisma, User } from '@prisma/client';
export class UserType implements User {
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
  rememberToken: string;
  createdAt: Date;
  updatedAt: Date;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
}
