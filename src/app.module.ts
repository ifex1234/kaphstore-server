/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma/prisma.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ProductsModule,
    UsersModule,
    OrdersModule,
    // AuthenticationModule,
  ],
  controllers: [
    AppController,
    ProductsController,
    UsersController,
    OrdersController,
  ],
  providers: [
    AppService,
    ProductsService,
    UsersService,
    PrismaService,
    OrdersService,
  ],
})
export class AppModule {}
