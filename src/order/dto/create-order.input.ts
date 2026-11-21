import { InputType, Field, Int } from '@nestjs/graphql';
import { OrderStatus } from '../../enums/order.status.enum';
import { IsDecimal, IsEnum, IsNumber } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  @IsNumber()
  orderNumber!: number;

  @Field(() => Int)
  @IsDecimal()
  totalPrice!: number;

  @Field(() => OrderStatus)
  @IsEnum(OrderStatus)
  status!: OrderStatus;
}
