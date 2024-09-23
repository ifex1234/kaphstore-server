/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateOrderDto {
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
