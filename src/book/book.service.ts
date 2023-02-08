import { Injectable } from '@nestjs/common';
import { AuthorService } from 'src/author/author.service';
import { PublishingCompany } from 'src/publishing-company/publishing-company.entity';
import { PublishingCompanyService } from 'src/publishing-company/publishing-company.service';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    private readonly AuthorService: AuthorService,
    private readonly PublisherService: PublishingCompanyService,
  ) {}

  async createBook(body: any): Promise<Book> {
    console.log(body);

    const getAuthorsPromises = body.authors.map((id) => {
      return this.AuthorService.getAuthor(id);
    });

    const authors = await Promise.all(getAuthorsPromises);
    const publisher = await this.PublisherService.getPublisher(
      body.publishingCompany,
    );

    console.log('authors', authors);
    console.log('publisher', publisher);

    const bookToCreate = {
      title: body.title,
      authors: authors,
      images: [], // <-- need: Controller, Service, Repository
      price: body.price,
      description: [], // <-- need: Controller, Service, Repository
      pageCount: body.pageCount,
      language: body.language,
      PublishingCompany: publisher,
      publishingDate: body.publishingDate,
      dimension: [], // <-- need: Controller, Service, Repository
    };

    const bookObj = {
      title: 'Book 1',
      authors: [1],
      images: [
        { url: 'https://url.com', cover: true },
        { url: 'https://url2.com', cover: false },
        { url: 'https://url3.com', cover: false },
      ],
      price: 45.9,
      description: [
        { text: 'paragraph 01', position: 1 },
        { text: 'paragraph 02', position: 2 },
      ],
      pageCount: 249,
      language: 'Portuguese',
      publishingCompany: 1,
      publishingDate: '08/02/2023',
      dimension: { width: 15, height: 20, depth: 10 },
    };

    return null;
  }
}
