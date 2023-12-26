import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user.module';
import { AuthService } from '../auth/auth.service';
import { jwtConstants } from '../auth/constants';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    // Đăng ký module JWT, có thể sử dụng JwtService
    JwtModule.register({
      // Khoá bí mật
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h', algorithm: 'HS256' },
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
