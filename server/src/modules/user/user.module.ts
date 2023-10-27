import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './user.entity';
import { Module } from '@nestjs/common';
import ConfirmationEntity from './confirmation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([ConfirmationEntity]),
  ],
  exports: [TypeOrmModule],
})
export class UserModule {}
