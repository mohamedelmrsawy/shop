import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoleStatus } from '../../enums/role.status.enum';
import { Address } from '../../address/entities/address.entity';
import { Review } from '../../review/entities/review.entity';

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

  @OneToMany(() => Address, (a) => a.user)
  @Field(() => [Address])
  addresses!: Address[];

  @OneToMany(() => Review, (r) => r.user)
  @Field(() => [Review])
  reviewes!: Review[];
}
