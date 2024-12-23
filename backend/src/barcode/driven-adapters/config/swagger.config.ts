import {INestApplication} from '@nestjs/common';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('QR Code API')
    .setDescription('API for managing QR Codes')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
