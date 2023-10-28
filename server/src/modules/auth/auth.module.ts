import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GithubStrategy } from './github.strategy';
import { UserService } from '../user/user.service';
import UserEntity from '../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [UserService, GithubStrategy, GoogleStrategy],
  exports: [],
})
export class AuthModule {}
