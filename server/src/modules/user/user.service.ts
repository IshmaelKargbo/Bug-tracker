import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from './user.entity';
import { Repository } from 'typeorm';
import ConfirmationEntity from './confirmation.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    @InjectRepository(ConfirmationEntity)
    private codeRepository: Repository<ConfirmationEntity>,
  ) {}

  async create(email: string): Promise<UserEntity> {
    const check = await this.repository.findOne({ where: { email } });

    if (check)
      throw new NotAcceptableException(
        `user already exist with this email ${email}`,
      );

    const code = new ConfirmationEntity({});

    const confirmation = await this.codeRepository.save(code);

    const user = new UserEntity({
      email,
      confirmation,
    });

    return this.repository.save(user);
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
      relations: { confirmation: true },
    });

    if (!user) throw new NotFoundException(`No user found for this id ${id}`);

    return user;
  }
}
