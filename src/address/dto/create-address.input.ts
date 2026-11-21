import { InputType, Int, Field } from '@nestjs/graphql';
import { IsPhoneNumber, IsString } from 'class-validator';

@InputType()
export class CreateAddressInput {
  @Field()
  @IsString()
  city!: string;

  @Field()
  @IsString()
  street!: string;

  @Field(() => Int)
  @IsPhoneNumber()
  phone!: number;
}
