import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfiger } from '../helper/typeOrmConfiger';
import { graphQlConfiger } from '../helper/graphQlConfiger';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ProductImageModule } from './product-image/product-image.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { CouponModule } from './coupon/coupon.module';
import { ReviewModule } from './review/review.module';
import { NotificationModule } from './notification/notification.module';
import { InventoryModule } from './inventory/inventory.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';

@Module({
  imports: [
    typeOrmConfiger,
    graphQlConfiger,
    UserModule,
    AddressModule,
    CategoryModule,
    ProductModule,
    ProductImageModule,
    CartModule,
    CartItemModule,
    OrderModule,
    OrderItemModule,
    CouponModule,
    ReviewModule,
    NotificationModule,
    InventoryModule,
    RefreshTokenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
