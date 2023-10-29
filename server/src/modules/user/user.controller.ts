import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import UserEntity from './user.entity';
import { FindOneParams } from './user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.service.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param() params: FindOneParams): Promise<UserEntity> {
    return this.service.findOne(params.id);
  }
}
