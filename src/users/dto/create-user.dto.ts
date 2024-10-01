/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';
export class CreateUserDto {
  // @ApiProperty()
  // id: number;
  @ApiProperty()
  createdAt: Date;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;
  @ApiProperty()
  phoneNo: string;
  @ApiProperty()
  address: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty()
  userId: string;
}
