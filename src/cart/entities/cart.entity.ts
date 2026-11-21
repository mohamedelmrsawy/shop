import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { CartItem } from '../../cart-item/entities/cart-item.entity';

@ObjectType()
@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;

  @OneToMany(() => CartItem, (c) => c.cart)
  @Field(() => [CartItem])
  cartItemes!: CartItem[];
}
