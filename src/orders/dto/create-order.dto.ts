/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @IsNotEmpty()
  @ApiProperty()
  userID: number;

  @IsNotEmpty()
  @ApiProperty()
  orderId: number;

  @IsNotEmpty()
  @ApiProperty()
  sum: number;
}
