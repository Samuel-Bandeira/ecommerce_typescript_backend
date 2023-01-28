import { Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

interface PayloadI {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(payload: any) {
    const user = await this.userService.getUser(payload);

    if (user && user.password == payload.password) return user;

    return null;
  }

  async login(@Body() payload: any) {
    const user = await this.validateUser(payload);

    if (user) {
      return {
        access_token: this.jwtService.sign({
          email: user.email,
          sub: user.id,
        }),
      };
    }

    return 'error';
  }
}
