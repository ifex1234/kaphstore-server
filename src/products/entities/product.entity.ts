/* eslint-disable prettier/prettier */
import { category, Product } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class ProductEntity implements Product {
  id: number;
  price: number;
  prevPrice: number;
  currPrice: number;
  cartID: number;
  @ApiProperty()
  currentPrice: number;
  @ApiProperty({ required: false })
  previousPrice: number;
  @ApiProperty()
  category: category;
  @ApiProperty()
  imageUrl: string;
  @ApiProperty()
  productUrl: string;
  @ApiProperty()
  title: string;
  @ApiProperty({ required: false, default: 1 })
  quantity: number;
}
