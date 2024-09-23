/* eslint-disable prettier/prettier */
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
import { ConfigService } from '@nestjs/config';
// import * as session from 'express-session';
// import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, //we use 200 as some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  const config = new DocumentBuilder()
    .setTitle('Kaphstore')
    .setDescription('Kaphstore API description')
    .setVersion('0.1')
    .addTag('Kaphstore')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  app.enableCors(corsOptions);
  app.setGlobalPrefix('api/');
  // app.use(
  //   session({ secret: 'my-secret', resave: false, saveUninitialized: false }),
  // );
  // app.use(
  //   passport.authenticate('jwt', {
  //     successRedirect: '/',
  //     failureRedirect: '/login',
  //   }),
  // );
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3001;
  console.log(`Application is running on: http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
