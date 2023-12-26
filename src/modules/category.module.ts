import { Module } from '@nestjs/common';
import { CategoryController } from '../app/controller/category.controller';
import { CategoryService } from '../app/service/category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../app/models/category.model';
import { CategoryRepository } from '../app/repository/category.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}
