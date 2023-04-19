import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.static(join(__dirname, '..', 'public')));
  app.use(cors());

  await app.listen(3000);
}
bootstrap();
