import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(@Body() body: any): Promise<Book> {
    await this.bookService.createBook(body);
    return null;
  }
}
