/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Cart as CartMain } from '@prisma/client';
export class Cart implements CartMain {
  @ApiProperty()
  productName: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ required: false, default: 1 })
  quantity: number;
  @ApiProperty()
  userID: number;

  @ApiProperty()
  id: number;
}
