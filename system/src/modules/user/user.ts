import { Exclude } from "class-transformer";
import UserEntity from "./user.entity";
import { IsEmail } from "class-validator";

class User {
  id: string;

  givenNames: string;

  familyName: string;

  email: string;

  userName: string;

  password: string;

  @Exclude()
  createAt: Date;

  @Exclude()
  updateAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}

export class UserDTO {

  @IsEmail()
  email: string;

}

export default User;
