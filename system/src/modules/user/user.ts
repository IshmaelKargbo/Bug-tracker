import { Exclude } from "class-transformer";
import UserEntity from "./user.entity";
import * as yup from "yup";

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
  email: string;

  async validate() {
    const schema = yup
      .object({
        email: yup.string().required().email(),
      })
      .required();
    const res = schema.validateSync(this, { abortEarly: false, stripUnknown: true });

    console.log(res);
    
    return false;
  }
}

export default User;
