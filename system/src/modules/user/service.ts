import DB from "../../config/orm";
import User, { UserDTO } from "./user";
import UserEntity from "./user.entity";

class UserService {
  private repo = DB.getRepository(UserEntity);

  async create(userDTO: UserDTO): Promise<User> {
    const user = await this.repo.create(userDTO);

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
