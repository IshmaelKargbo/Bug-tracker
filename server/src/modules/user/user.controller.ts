import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import UserEntity from './user.entity';
import { CreateUserDto, FindOneParams } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto): Promise<UserEntity> {
    return this.service.create(dto.email);
  }

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param() params: FindOneParams): Promise<UserEntity> {
    return this.service.findOne(params.id);
  }
}
