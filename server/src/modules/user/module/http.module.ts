import { Module } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserModule } from './user.module';
import { UserController } from '../user.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/modules/auth/auth.guard';

@Module({
  imports: [UserModule],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserHttpModule {}
