/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  // create(createProductDto: CreateProductDto) {
  //   return this.prisma.product.create({ data: createProductDto });
  // }

  findAllByCategory(category: category) {
    return this.prisma.product.findMany({ where: { category: category } });
  }

  findOne(productUrl: string) {
    return this.prisma.product.findFirst({ where: { productUrl } });
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return this.prisma.product.update({
  //     where: { id },
  //     data: updateProductDto,
  //   });
  // }

  // remove(id: number) {
  //   return this.prisma.product.delete({ where: { id } });
  // }
}
