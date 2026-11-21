import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;
}
