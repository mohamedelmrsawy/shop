import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemResolver } from './cart-item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './entities/cart-item.entity';

@Module({
  providers: [CartItemResolver, CartItemService],
  imports: [TypeOrmModule.forFeature([CartItem])],
})
export class CartItemModule {}
