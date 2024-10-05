/* eslint-disable prettier/prettier */
import {
  Controller,
  Param,
  HttpCode,
  Get,
  NotFoundException,
  Body,
  Header,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  @ApiCreatedResponse({ type: UsersEntity })
  @ApiOkResponse({ type: UsersEntity })
  @HttpCode(HttpStatus.OK)
  signUp(
    @Body() dto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      return this.usersService.create(dto);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statuscode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: UsersEntity })
  @ApiBearerAuth()
  @HttpCode(200)
  async findOne(@Param('id') userId: string, response: Response) {
    try {
      const data = new UsersEntity(await this.usersService.findOne(userId));
      if (!data) {
        throw new NotFoundException(`user with the id ${userId} not found`);
      }
      return data;
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
