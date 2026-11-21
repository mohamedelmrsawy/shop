import { CreateCouponInput } from './create-coupon.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCouponInput extends PartialType(CreateCouponInput) {}
