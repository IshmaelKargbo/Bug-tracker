import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { DBConfig } from './config/interface';
import { UserHttpModule } from './modules/user/module/http.module';
import { HealthModule } from './modules/monitor/health/health.module';
import { AuthModule } from './modules/auth/auth.module';

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
})
export class AppModule {}
