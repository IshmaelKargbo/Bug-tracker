import {
  Injectable,
  Logger,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from './user.entity';
import { Repository } from 'typeorm';
import { AuthDTO, NewUserDTO } from './user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async findOrCreate(user: AuthDTO | NewUserDTO): Promise<UserEntity> {
    const check = await this.repository.findOne({
      where: { email: user.email },
    });

    if (check) return check;

    return this.repository.save(user).then((res) => {
      this.logger.log(`${user.email} register vai ${user.provider}`);
      return res;
    });
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
    });

    if (!user) throw new NotFoundException(`No user found for this id ${id}`);

    return user;
  }
}
