import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    // if route is protected, there is a user set in auth.middleware
    if (req.user) {
      return req.user;
    }
    return null;
  },
);

export interface UserMetaData {
  userId: string;
  email: string;
  permissions: string;
}
