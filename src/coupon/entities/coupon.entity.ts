import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column({ unique: true })
  @Field()
  code!: string;

  @Column()
  @Field()
  discountType!: string;

  @Column()
  @Field(() => Int)
  discountValue!: number;

  @Column()
  @Field(() => Date)
  expiresAt!: Date;
}
