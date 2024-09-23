/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { category } from '@prisma/client';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  currentPrice: number;
  @ApiProperty({ required: false })
  previousPrice: number;
  @ApiProperty()
  @IsNotEmpty()
  category: category;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  imageUrl: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productUrl: string;
  @ApiProperty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @ApiProperty()
  quantity: number;
}
