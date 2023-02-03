import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
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
  async getUser(@Param('id') id) {
    const user = await this.userService.getUserById(id);
    if (!user) throw new NotFoundException();
    else {
      const { password, ...rest } = user;
      return rest;
    }
  }
}
