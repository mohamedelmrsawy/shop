import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class CreateCartItemInput {
  @Field(() => Int)
  @IsNumber()
  quantity!: number;
}
