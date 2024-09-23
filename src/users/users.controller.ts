/* eslint-disable prettier/prettier */
import {
  Controller,
  Body,
  Patch,
  Param,
  HttpStatus,
  ParseIntPipe,
  HttpCode,
  UseGuards,
  Get,
  NotFoundException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersEntity } from './entities/user.entity';
import {
  JwtAuthGuard,
  JwtGuard,
} from 'src/authentication/guards/jwt-auth.guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post('signup')
  // @Header('Cache-Control', 'none')
  // @HttpCode(201)
  // @ApiCreatedResponse({ type: UsersEntity })
  // async create(
  //   @Body() createUserDto: CreateUserDto,
  //   @Res({ passthrough: true }) res: Response,
  // ) {
  //   try {
  //     const data = new UsersEntity(
  //       await this.usersService.create(createUserDto),
  //     );
  //     return res.status(HttpStatus.CREATED).json({
  //       message: 'New user successfully created',
  //       data,
  //     });
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   } catch (error) {
  //     return res.status(HttpStatus.BAD_REQUEST).json({
  //       statuscode: 400,
  //       message: 'Error: User not created!',
  //       error: 'Bad Request',
  //     });
  //   }
  // }

  // @Get()
  // @ApiOkResponse({ type: UsersEntity })
  // @HttpCode(200)
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // async findAll(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK);
  //   const data = await this.usersService.findAll();
  //   return data.map((user) => new UsersEntity(user));
  // }
  @Get(':id')
  @ApiOkResponse({ type: UsersEntity })
  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  async findOne(@Param('id', ParseIntPipe) id: number, response: Response) {
    try {
      const data = new UsersEntity(await this.usersService.findOne(id));
      if (!data) {
        throw new NotFoundException(`user with the id ${id} not found`);
      }
      return data;
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: UsersEntity })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(202)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    res: Response,
  ) {
    try {
      const data = new UsersEntity(
        await this.usersService.update(id, updateUserDto),
      );
      return res
        .status(HttpStatus.ACCEPTED)
        .json({ message: 'data returned successfully', data });
    } catch (err) {
      return res.status(err.status).json(err.response);
    }
  }
}
