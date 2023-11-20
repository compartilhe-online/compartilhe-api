import { PartialType } from '@nestjs/mapped-types';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class UserAuthenticationDto extends PartialType(User) {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string;
}
