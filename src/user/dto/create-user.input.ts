import { InputType, Field } from '@nestjs/graphql';
import { RoleStatus } from '../../enums/role.status.enum';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password!: string;

  @Field(() => RoleStatus, { defaultValue: RoleStatus.USER })
  @IsEnum(RoleStatus)
  role!: RoleStatus;
}
