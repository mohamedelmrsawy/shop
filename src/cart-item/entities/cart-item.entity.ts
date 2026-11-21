import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cart } from '../../cart/entities/cart.entity';

@ObjectType()
@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field(() => Int)
  quantity!: number;

  @ManyToOne(() => Cart, (c) => c.cartItemes)
  @Field(() => Cart)
  cart!: Cart;
}
