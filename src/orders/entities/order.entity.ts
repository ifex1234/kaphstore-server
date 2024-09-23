/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Order } from '@prisma/client';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
export class OrderEntity implements Order {
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @IsNotEmpty()
  @ApiProperty()
  orderId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  productName: string;

  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  imageUrl: string;

  @IsNotEmpty()
  @ApiProperty()
  quantity: number;

  @IsNotEmpty()
  @ApiProperty()
  userID: number;

  @IsNotEmpty()
  @ApiProperty()
  sum: number;
}
