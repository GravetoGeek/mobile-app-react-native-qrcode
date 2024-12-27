import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Criar documento Swagger
    const config = new DocumentBuilder()
        .setTitle('QR Code API')
        .setDescription('API para gerenciamento de QR Codes')
        .setVersion('1.0.0')
        .addTag('barcode')
        .build();
    // Adicionar documento Swagger à aplicação
    const document = SwaggerModule.createDocument(app, config);

    // Configurar Swagger
    SwaggerModule.setup('docs', app, document);



    // Habilitar validação global
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true, // Remove propriedades que não estão no DTO
        forbidNonWhitelisted: true, // Gera erro para propriedades desconhecidas
        transform: true, // Converte dados para os tipos do DTO
      }));
  await app.listen(3000);
}
bootstrap();
