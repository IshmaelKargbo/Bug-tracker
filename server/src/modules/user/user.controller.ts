import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import User from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.service.findAll();
  }
}
