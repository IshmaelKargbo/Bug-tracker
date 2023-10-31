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
import * as bcrypt from 'bcrypt';

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

  async updateHashedRT(id: string, refreshToken): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
    });

    if (!user) throw new NotFoundException(`No user found for this id ${id}`);

    const hash = await this.hash(refreshToken);

    user.hashedRT = hash;
    this.repository.update({ id }, user);

    return user;
  }

  async removeHashedRT(id: string) {
    const user = await this.repository.findOne({
      where: { id },
    });

    if (!user) throw new NotFoundException(`No user found for this id ${id}`);

    user.hashedRT = null;

    this.repository.update({ id }, user);

    return user;
  }

  private hash(data: any) {
    return bcrypt.hash(data, 10);
  }
}
