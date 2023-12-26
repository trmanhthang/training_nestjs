import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../app/service/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../app/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async createToken(user: LoginUserDto): Promise<string> {
    return this.jwtService.sign(user);
  }

  async validateToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
