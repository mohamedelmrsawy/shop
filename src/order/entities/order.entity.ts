import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../../enums/order.status.enum';

@ObjectType()
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field(() => Int)
  orderNumber!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @Field(() => Int)
  totalPrice!: number;

  @Column('enum', { default: OrderStatus.PENDING })
  @Field(() => OrderStatus)
  status!: OrderStatus;
}
