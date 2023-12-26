import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { Product } from '../models/products.model';
import { AuthService } from '../../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    private authService: AuthService,
  ) {}

  @Get()
  getOne(@Body() id: string): number {
    return this.productService.getOne(id);
  }

  @Post('create')
  async create(@Body() product: Product): Promise<void> {
    this.productService.create(product);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get_all')
  getAll(): any {
    return this.productService.getAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.productService.delete(id);
  }

  @Get('token')
  getToken(): any {
    return this.authService.createToken({
      username: 'thangmt868',
      password: '12345',
    });
  }
}
