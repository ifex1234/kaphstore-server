/* eslint-disable prettier/prettier */
import {
  Controller,
  Param,
  HttpCode,
  Get,
  NotFoundException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
