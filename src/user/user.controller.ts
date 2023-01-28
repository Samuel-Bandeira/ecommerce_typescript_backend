import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body) {
    return this.userService.createUser();
  }

  @Get()
  @UseGuards(JwtGuard)
  getUsers() {
    return this.userService.getUsers();
  }
}
