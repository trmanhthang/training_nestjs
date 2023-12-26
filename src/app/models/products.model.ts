import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductsModel = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  private name: string;

  @Prop()
  private quantity: number;

  @Prop()
  private price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
