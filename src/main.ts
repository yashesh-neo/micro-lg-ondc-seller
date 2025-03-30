import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; 
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    disableErrorMessages: true,
    transform: true,
   }),
  );

  const config = new DocumentBuilder()
    .setTitle('Micro Logistics API - Seller')
    .setDescription('Micro Logistics Seller API for ONDC poc')
    .setVersion('0.2')
    .addTag('micro-lg-ondc')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-spec', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
