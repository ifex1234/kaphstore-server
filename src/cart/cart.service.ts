/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// import { CreateCartDto } from './dto/create-cart.dto';
// import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}
  create(createCartDto: Prisma.CartCreateInput) {
    const data = this.prisma.cart.create({ data: createCartDto });
    return data;
  }

  findAll() {
    const data = this.prisma.cart.findMany();
    return data;
  }

  findOne(id: number) {
    const data = this.prisma.cart.findUnique({ where: { id } });
    return data;
  }

  update(id: number, updateCartDto: Prisma.CartUpdateInput) {
    const data = this.prisma.cart.update({
      where: { id },
      data: updateCartDto,
    });
    return data;
  }

  remove(id: number) {
    return this.prisma.cart.delete({ where: { id } });
  }
}
