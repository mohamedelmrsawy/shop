import { CreateOrderItemInput } from './create-order-item.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderItemInput extends PartialType(CreateOrderItemInput) {}
