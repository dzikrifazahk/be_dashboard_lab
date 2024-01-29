import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BaseDto } from './common/dtos/base.dto';
import { BasePaginationDto } from './common/dtos/pagination.dto';
import { Logger } from '@nestjs/common';

const port = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Dashboard Lab')
    .setDescription('Dashboard Lab Application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [BaseDto, BasePaginationDto],
  });

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
  
  await app.listen(port);
  Logger.log(`your port is ${port}`)
}
bootstrap();
