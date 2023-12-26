import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CategoryModel = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  private name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
