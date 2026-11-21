import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@ObjectType()
@Entity()
export class Review {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  rating!: string;

  @Field(() => String)
  @Column()
  comment!: string;

  @ManyToOne(() => User, (u) => u.reviewes)
  @Field(() => User)
  user!: User;
}
