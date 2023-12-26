import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(doc): Promise<any> {
    const createdEntity = new this.userModel(doc);
    return await createdEntity.save();
  }

  async checkUserByEmail(email: string): Promise<boolean> {
    return this.userModel.findOne({ email: email }, (err, user) => {
      if (err) {
        console.error(err);
      }
      return !!user;
    });
  }

  async findOneByEmail(email: string): Promise<any> {
    await this.userModel.findOne({ email: email }, (err, user) => {
      if (err) {
        console.error(err);
        return;
      }

      if (user) {
        return user;
      }
    });
  }
}
