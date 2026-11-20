import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field(() => String)
  name!: string;

  @Column({ unique: true })
  @Field(() => String)
  email!: string;

  @Column()
  @Field(() => String)
  password!: string;
}
