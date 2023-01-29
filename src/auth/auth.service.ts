import { Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
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
    if (user && (await bcrypt.compare(payload.password, user.password)))
      return user;
    return null;
  }

  async login(@Body() payload: any) {
    console.log(payload);
    const user = await this.validateUser(payload);
    console.log(user);
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
