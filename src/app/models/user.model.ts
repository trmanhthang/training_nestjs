import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';
export type UserSchema = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  private name: string;
  @Prop()
  private email: string;
  @Prop()
  private password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
