import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponResolver } from './coupon.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coupon } from './entities/coupon.entity';

@Module({
  providers: [CouponResolver, CouponService],
  imports: [TypeOrmModule.forFeature([Coupon])],
})
export class CouponModule {}
