/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prima: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    return await this.prima.order.createMany({ data: createOrderDto });
  }

  async findAll(id: number) {
    return await this.prima.order.findMany({ where: { userID: id } });
  }

  async findOne(id: number) {
    return await this.prima.order.findFirst({ where: { id: id } });
  }
}
