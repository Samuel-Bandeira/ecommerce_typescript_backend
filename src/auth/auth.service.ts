import { Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
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

  async login(payload: any, response: Response) {
    const user = await this.validateUser(payload);
    const jwt = this.jwtService.sign({
      email: user.email,
      sub: user.id,
    });

    response.cookie('jwt', jwt, {
      httpOnly: true,
    });

    if (user) {
      return 'success';
    }

    return 'error';
  }
}
