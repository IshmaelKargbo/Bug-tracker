import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import UserEntity from './user.entity';
import { CreateUserDto, FindOneParams } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() dto: CreateUserDto): Promise<UserEntity> {
    return this.service.create(dto.email);
  }

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
