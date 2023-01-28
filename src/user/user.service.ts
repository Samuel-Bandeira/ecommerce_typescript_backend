import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

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

  async getUser(payload: FindI): Promise<User> {
    const user = await this.userRepository.findOneBy({
      email: payload.email,
    });

    if (user) return user;
    return null;
  }

  async createUser(): Promise<User> {
    const user = new User(
      'samuel',
      'samuel.bandeira.oliveira@gmail.com',
      'samuca123',
    );

    const response = await this.userRepository.save(user);
    return response;
  }
}
