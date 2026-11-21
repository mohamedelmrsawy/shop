import { InputType, Int, Field } from '@nestjs/graphql';
import { ProductStatus } from '../../enums/product.status.enum';
import { IsEnum, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  @IsString()
  name!: string;

  @Field(() => String)
  @IsString()
  description!: string;

  @Field(() => Number)
  @IsNumber()
  price!: number;

  @Field(() => Int)
  @IsNumber()
  stock!: number;

  @Field(() => ProductStatus)
  @IsEnum(ProductStatus)
  status!: ProductStatus;
}
