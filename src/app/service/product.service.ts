import { Injectable } from '@nestjs/common';
import { Product } from '../models/products.model';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}
  create(product: Product): void {
    this.productRepository.save(product).then();
  }

  getAll(): any {
    return this.productRepository.findAll();
  }

  getOne(id: string): any {
    return this.productRepository.findById(id);
  }

  delete(id: string): void {
    this.productRepository.delete(id);
  }
}
