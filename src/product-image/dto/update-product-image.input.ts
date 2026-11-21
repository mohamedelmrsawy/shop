import { CreateProductImageInput } from './create-product-image.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductImageInput extends PartialType(
  CreateProductImageInput,
) {}
