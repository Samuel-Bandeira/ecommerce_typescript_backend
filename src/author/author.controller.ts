import { Body, Controller } from '@nestjs/common';
import { Get, Param, Post } from '@nestjs/common/decorators';
import { Author } from './author.entity';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  createAuthor(@Body() body): Promise<Author> {
    return this.authorService.createAuthor(body);
  }

  @Get()
  getAuthors(): Promise<Author[]> {
    return this.authorService.getAuthors();
  }

  @Get('/:id')
  getAuthor(@Param('id') id: number): Promise<Author> {
    return this.authorService.getAuthor(id);
  }
}
