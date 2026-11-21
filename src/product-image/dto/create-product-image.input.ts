import { InputType, Field } from '@nestjs/graphql';
import { IsUrl } from 'class-validator';

@InputType()
export class CreateProductImageInput {
  @Field(() => String)
  @IsUrl()
  imageUrl!: string;
}
