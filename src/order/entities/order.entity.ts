import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderStatus } from '../../enums/order.status.enum';
import { OrderItem } from '../../order-item/entities/order-item.entity';

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

  @OneToMany(() => OrderItem, (o) => o.order)
  @Field(() => [OrderItem])
  orderItemes!: OrderItem[];
}
