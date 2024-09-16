/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { category } from '@prisma/client';
import { IsNotEmpty, IsString, IsUrl, MinLength } from 'class-validator';
export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1)
  currentPrice: number;
  @ApiProperty({ required: false })
  previousPrice: number;
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1)
  category: category;
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1)
  @IsString()
  @IsUrl()
  imageUrl: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productUrl: string;
  @ApiProperty()
  @MinLength(1)
  @IsString()
  title: string;
  @IsNotEmpty()
  @ApiProperty({ required: false, default: 1 })
  quantity: number;
}
