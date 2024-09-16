/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class CreateCartDto {
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
