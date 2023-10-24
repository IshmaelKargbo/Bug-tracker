import DB from "../../config/orm";
import { ErrorCode } from "../../exceptions/code";
import HttpException from "../../exceptions/exception";
import User, { UserDTO } from "./user";
import UserEntity from "./user.entity";

class UserService {
  private repo = DB.getRepository(UserEntity);

  async create(userDTO: UserDTO): Promise<User> {
    
    const one = await this.repo.findOne({ where: { email: userDTO.email } });

    if (one) throw new HttpException(ErrorCode.NotAcceptable, `User already exist with this email ${userDTO.email}`);

    const user = await this.repo.save(userDTO);

    return this.toUser(user);
  }

  async findAll(): Promise<User[]> {
    const list = await this.repo.find();

    return list.map((user) => this.toUser(user));
  }

  async findOne(id: string): Promise<User | undefined> {
    const one = await this.repo.findOne({ where: { id } });

    if (one) return this.toUser(one);
    else one;
  }

  toUser(entity: UserEntity) {
    return new User(entity);
  }
}

export default UserService;
