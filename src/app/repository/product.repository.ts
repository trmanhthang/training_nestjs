import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../models/products.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  save(product: Product): Promise<Product> {
    return new this.productModel(product).save().then();
  }

  findAll(): any {
    return this.productModel.find();
  }

  findById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async delete(_id: string): Promise<void> {
    try {
      await this.productModel.findByIdAndDelete(_id);
    } catch (err) {
      console.error(err.message);
    }
  }
}
