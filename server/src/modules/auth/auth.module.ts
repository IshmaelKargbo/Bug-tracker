import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GithubStrategy } from './strategy/github';
import { UserService } from '../user/user.service';
import UserEntity from '../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from './strategy/google';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtConfig } from 'src/config/configuration';
import { JwtStrategy } from './strategy/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const jConfig = config.get<JwtConfig>('jwt');

        return {
          secret: jConfig.secret,
          signOptions: { expiresIn: '60s' },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    UserService,
    GithubStrategy,
    GoogleStrategy,
    JwtStrategy,
    AuthService,
  ],
  exports: [],
})
export class AuthModule {}
