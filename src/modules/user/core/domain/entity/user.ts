import { Id, Nullable, Optional } from '@abstraction/type';
import {
  IsId,
  IsNotEmptyString,
  IsOptionalAndNullable,
} from '@abstraction/validation';
import { IsEmail } from 'class-validator';

export class User {
  @IsId()
  protected id: Id;

  @IsEmail()
  protected email: string;

  @IsNotEmptyString()
  protected password: string;

  @IsOptionalAndNullable()
  protected createdAt: Optional<Nullable<Date>>;

  @IsOptionalAndNullable()
  protected updatedAt: Optional<Nullable<Date>>;
}
