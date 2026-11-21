import { registerEnumType } from '@nestjs/graphql';

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

registerEnumType(ProductStatus);
