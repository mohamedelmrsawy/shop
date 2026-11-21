import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateReviewInput {
  @Field(() => String)
  @IsString()
  rating!: string;

  @Field(() => String)
  @IsString()
  comment!: string;
}
