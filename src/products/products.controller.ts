/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  HttpStatus,
  Res,
  //ParseIntPipe,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';
import { Response } from 'express';
import { category } from '@prisma/client';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('all-products/:id')
  @ApiOkResponse({ type: ProductEntity, isArray: true })
  @HttpCode(200)
  findAll(
    @Param('id') category: category,
    @Res({ passthrough: true }) res: Response,
  ) {
    res.status(HttpStatus.OK);
    return this.productsService.findAllByCategory(category);
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductEntity })
  findOne(@Param('id') productUrl: string) {
    const data = this.productsService.findOne(productUrl);
    if (!data) {
      throw new NotFoundException(`Product with ${productUrl} does not exist.`);
    }
    return data;
  }
  //Not needed

  // @Post()
  // @HttpCode(201)
  // @Header('Cache-Control', 'none')
  // @ApiCreatedResponse({ type: ProductEntity })
  // create(
  //   @Body() createProductDto: CreateProductDto,
  //   // @Res({ passthrough: true }) res: Response,
  // ) {
  //   // res.status(HttpStatus.CREATED).send();
  //   return this.productsService.create(createProductDto);
  // }

  // @Patch(':id')
  // @ApiOkResponse({ type: ProductEntity })
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateProductDto: UpdateProductDto,
  // ) {
  //   return this.productsService.update(id, updateProductDto);
  // }

  // @Delete(':id')
  // @ApiOkResponse({ type: ProductEntity })
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.productsService.remove(id);
  // }
}
