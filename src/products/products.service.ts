/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  findAllByCategory(category: category) {
    return this.prisma.product.findMany({ where: { category: category } });
  }

  findOne(productUrl: string) {
    return this.prisma.product.findFirst({ where: { productUrl } });
  }
}
