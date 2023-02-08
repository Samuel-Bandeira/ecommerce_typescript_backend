import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async createAuthor(body: any): Promise<Author> {
    let authorToSave = {
      name: body.name,
    };

    if (body.books.length != 0) {
      //Implement it!
    }
    const author = this.authorRepository.create(authorToSave);
    return await this.authorRepository.save(author);
  }
  async getAuthors(): Promise<Author[]> {
    return await this.authorRepository.find();
  }

  async getAuthor(id: number): Promise<Author> {
    return await this.authorRepository.findOneBy({ id: id });
  }
}
