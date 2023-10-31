import { OmitType } from '@nestjs/mapped-types';
import { IsEmail, IsString, IsUUID } from 'class-validator';

class UserDTO {
  @IsEmail()
  email: string;

  @IsString()
  givenNames: string;

  @IsString()
  familyName: string;

  @IsString()
  public image: string;

  @IsString()
  public provider: string;

  @IsString()
  public password: string;

  @IsUUID()
  id: string;
}

export class NewUserDTO extends OmitType(UserDTO, ['id', 'image'] as const) {}

export class AuthDTO extends OmitType(UserDTO, ['id', 'password'] as const) {}

export class FindOneParams extends OmitType(UserDTO, [
  'email',
  'familyName',
  'givenNames',
  'image',
  'password',
  'provider',
] as const) {}
