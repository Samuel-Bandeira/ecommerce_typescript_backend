import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(payload: any) {
    const user = await this.userService.getUserByEmail(payload.email);
    if (user && (await bcrypt.compare(payload.password, user.password)))
      return user;
    return null;
  }

  async login(payload: any) {
    const user = await this.validateUser(payload);

    if (!user) throw new UnauthorizedException();

    const jwt = this.jwtService.sign({
      name: user.name,
      sub: user.id,
    });

    return {
      id: user.id,
      access_token: jwt,
    };
  }
}
