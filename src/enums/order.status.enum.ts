import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
  READY = 'READY',
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

registerEnumType(OrderStatus);
