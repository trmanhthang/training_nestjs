import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from '../dto/user.dto';
import * as bcrypt from 'bcryptjs';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(userDto: CreateUserDto) {
    userDto.password = await bcrypt.hash(userDto.password, 10);

    // check exists
    const userInDb = await this.userRepository.findOneByEmail(userDto.email);
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    return await this.userRepository.create(userDto);
  }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findOneByEmail(email);
  }
}
