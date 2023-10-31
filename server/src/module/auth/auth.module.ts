import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GithubStrategy } from './strategy/github';
import { UserService } from '../user/user.service';
import UserEntity from '../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from './strategy/google';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfig } from 'src/config/configuration';
import { AuthService } from './auth.service';
import { SessionSerializer } from './session.serializer';
import { ATStrategy } from './strategy/at';
import { RTStrategy } from './strategy/rt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const jConfig = config.get<AppConfig>('app');

        return {
          secret: jConfig.secret,
          signOptions: { expiresIn: '6h' },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    UserService,
    GithubStrategy,
    GoogleStrategy,
    ATStrategy,
    RTStrategy,
    AuthService,
    SessionSerializer,
  ],
  exports: [],
})
export class AuthModule {}
