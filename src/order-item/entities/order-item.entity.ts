import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@ObjectType()
@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field(() => Int)
  quantity!: number;

  @Column()
  @Field(() => Int)
  unitPrice!: number;

  @ManyToOne(() => Order, (o) => o.orderItemes)
  @Field(() => Order)
  order!: Order;
}
