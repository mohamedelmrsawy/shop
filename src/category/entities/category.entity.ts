import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@ObjectType()
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field()
  description!: string;

  @OneToOne(() => Product)
  @JoinColumn()
  product!: Product;
}
