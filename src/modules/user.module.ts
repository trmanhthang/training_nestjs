import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../app/models/user.model';
import { UserService } from "../app/service/user.service";
import { UserRepository } from "../app/repository/user.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
