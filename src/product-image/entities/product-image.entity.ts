import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@ObjectType()
@Entity()
export class ProductImage {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  imageUrl!: string;

  @ManyToOne(() => Product, (p) => p.prodectImages)
  @Field(() => Product)
  product!: Product;
}
