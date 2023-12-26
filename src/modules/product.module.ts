import { Module } from '@nestjs/common';
import { ProductController } from '../app/controller/product.controller';
import { ProductService } from '../app/service/product.service';
import { ProductRepository } from '../app/repository/product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../app/models/products.model';
import { CategoryModule } from './category.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    CategoryModule,
    AuthModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  exports: [ProductService],
})
export class ProductModule {}
