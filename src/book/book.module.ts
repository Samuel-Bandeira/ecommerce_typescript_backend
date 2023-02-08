import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { AuthorModule } from 'src/author/author.module';
import { PublishingCompanyModule } from 'src/publishing-company/publishing-company.module';

@Module({
  imports: [AuthorModule, PublishingCompanyModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
