/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderEntity } from './entities/order.entity';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @ApiOkResponse({ type: OrderEntity, isArray: true })
  @HttpCode(200)
  @Get('/all-orders/:id')
  findAll(@Body() id: string) {
    return this.ordersService.findAll(id);
  }
}
