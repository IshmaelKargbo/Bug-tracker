import { IsEmail, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
}

export class FindOneParams {
  @IsUUID()
  id: string;
}
