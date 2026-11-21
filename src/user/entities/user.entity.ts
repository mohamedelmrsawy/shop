import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RoleStatus } from '../../enums/role.status.enum';

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

  @Column({ enum: RoleStatus, default: 'USER' })
  @Field(() => RoleStatus)
  role!: RoleStatus;
}
