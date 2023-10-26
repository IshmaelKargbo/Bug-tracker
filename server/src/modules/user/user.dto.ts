import { OmitType } from '@nestjs/mapped-types';
import { IsEmail, IsUUID } from 'class-validator';

class UserDto {
  @IsEmail()
  email: string;

  @IsUUID()
  id: string;
}

export class CreateUserDto extends OmitType(UserDto, ['id'] as const) {}

export class FindOneParams extends OmitType(UserDto, ['email'] as const) {}
