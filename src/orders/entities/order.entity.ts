/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Order } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
export class OrderEntity implements Order {
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @IsNotEmpty()
  @ApiProperty()
  userId: string;

  @IsNotEmpty()
  @ApiProperty()
  orderId: number;

  @IsNotEmpty()
  @ApiProperty()
  sum: number;
}
