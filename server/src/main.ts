import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './pipes/exception';
import { EmojiLogger } from './common/emoji-logger';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new EmojiLogger(),
  });

  const config = app.get(ConfigService);

  const appConfig = config.get<AppConfig>('app');

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(appConfig.port);
}
bootstrap();
