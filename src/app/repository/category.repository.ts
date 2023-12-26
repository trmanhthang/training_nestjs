import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../models/category.model';
import { Model } from 'mongoose';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}
}
