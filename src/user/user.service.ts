import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/createUserDto';
interface FindI {
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({
      id: id,
    });

    const { password, ...rest } = user;
    if (user)
      return {
        user: rest,
      };
    return null;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOneBy({
      email: email,
    });

    if (user) return user;
    return null;
  }

  async createUser(payload: CreateUserDto): Promise<User> {
    console.log(payload.password);
    const encryptedPass = await bcrypt.hash(payload.password, 12);
    const user = new User(
      payload.name,
      payload.lastName,
      payload.email,
      encryptedPass,
    );

    const response = await this.userRepository.save(user);
    return response;
  }
}
