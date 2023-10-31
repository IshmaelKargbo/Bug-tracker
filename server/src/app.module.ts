import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { DBConfig } from './config/interface';
import { UserHttpModule } from './module/user/module/http.module';
import { HealthModule } from './module/monitor/health/health.module';
import { AuthModule } from './module/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { ATGuard } from './module/auth/guard/at';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbConfig = config.get<DBConfig>('database');

        return {
          type: 'postgres',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.user,
          password: dbConfig.password,
          database: dbConfig.db,
          entities: [],
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
    UserHttpModule,
    HealthModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ATGuard,
    },
  ],
})
export class AppModule {}
