import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  LoggerMiddleware,
  SwaggerConfig,
  AllExceptionFilter,
  LoggingInterceptor,
  ResponseInterceptor,
  TimeoutInterceptor,
  LoggerService,
} from './configuration';

async function bootstrap() {
  const logger = new LoggerService();
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(
    new LoggingInterceptor(logger),
    new ResponseInterceptor(),
    new TimeoutInterceptor(),
  );
  app.useGlobalFilters(new AllExceptionFilter(logger));
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(LoggerMiddleware);

  SwaggerConfig.ConfigSwaggerModule(app);
  await app.listen(3000);
}
bootstrap();
