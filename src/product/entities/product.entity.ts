import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductStatus } from '../../enums/product.status.enum';

@ObjectType()
@Entity()
export class Product {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column({ nullable: true })
  description!: string;

  @Field(() => Number)
  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  @Field(() => Int)
  @Column()
  stock!: number;

  @Field(() => ProductStatus)
  @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.ACTIVE })
  status!: ProductStatus;
}
