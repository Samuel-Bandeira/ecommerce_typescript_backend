import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  async login(@Body() payload) {
    return await this.authService.login(payload);
  }
}
