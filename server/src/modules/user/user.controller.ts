import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import UserEntity from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  create(@Body() { email }: { email: string }): Promise<UserEntity> {
    return this.service.create(email);
  }

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserEntity> {
    return this.service.findOne(id);
  }
}
