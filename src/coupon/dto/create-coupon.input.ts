import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateCouponInput {
  @Field()
  @IsString()
  code!: string;

  @Field()
  @IsString()
  discountType!: string;

  @Field(() => Int)
  @IsNumber()
  discountValue!: number;

  @Field(() => Date)
  @IsDate()
  expiresAt!: Date;
}
