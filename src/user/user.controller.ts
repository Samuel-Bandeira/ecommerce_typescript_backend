import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(JwtGuard)
  createUser(@Body() payload: CreateUserDto) {
    console.log(payload);
    return this.userService.createUser(payload);
  }

  @Get()
  @UseGuards(JwtGuard)
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:id')
  @UseGuards(JwtGuard)
  getUser(@Param('id') id) {
    return this.userService.getUserById(id);
  }
}
