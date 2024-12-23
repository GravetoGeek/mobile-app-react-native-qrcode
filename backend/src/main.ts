import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Habilitar validação global
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true, // Remove propriedades que não estão no DTO
        forbidNonWhitelisted: true, // Gera erro para propriedades desconhecidas
        transform: true, // Converte dados para os tipos do DTO
      }));
  await app.listen(3000);
}
bootstrap();
