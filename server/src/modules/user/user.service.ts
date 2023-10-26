import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from './user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    private dataSource: DataSource,
  ) {}

  async create(email: string): Promise<UserEntity> {
    const user = new UserEntity({
      email,
    });

    const check = await this.repository.findOne({ where: { email } });

    if (check) throw new Error(`user already exist with this email ${email}`);

    return this.repository.save(user);
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<UserEntity | null> {
    return this.repository.findOneBy({ id });
  }
}
