import { Module } from '@nestjs/common';
import UserController from './controller';
import { UserService } from './user.service';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserHttpModule {}
