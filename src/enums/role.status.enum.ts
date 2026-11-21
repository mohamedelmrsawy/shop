import { registerEnumType } from '@nestjs/graphql';

export enum RoleStatus {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

registerEnumType(RoleStatus);
