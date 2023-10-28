import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from '../user.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
})
export class UserModule {}
