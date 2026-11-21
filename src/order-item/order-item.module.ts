import { Module } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItemResolver } from './order-item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';

@Module({
  providers: [OrderItemResolver, OrderItemService],
  imports: [TypeOrmModule.forFeature([OrderItem])],
})
export class OrderItemModule {}
