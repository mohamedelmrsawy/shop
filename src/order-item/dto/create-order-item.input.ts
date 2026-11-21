import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDecimal, IsNumber } from 'class-validator';

@InputType()
export class CreateOrderItemInput {
  @Field(() => Int)
  @IsNumber()
  quantity!: number;

  @Field(() => Int)
  @IsDecimal()
  unitPrice!: number;
}
