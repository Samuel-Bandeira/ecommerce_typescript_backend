import { Book } from 'src/book/book.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
  @Column()
  reviewer: string;
  @ManyToOne(() => Book, (book) => book.reviews)
  book: Book;
}

interface BookI {
  id: number;
  title: string;
  authors: {
    id: number;
    name: string;
  }[];
  images: {
    id: number;
    bookId: number;
    url: string;
    cover: boolean;
  }[];
  price: number;
  rating: number;
  numberOfClientRatings: number;
  description: {
    id: number;
    paragraphs: {
      id: number;
      descriptionId: number;
      text: string;
      position: number;
    }[];
  };
  review: {
    bookId: number;
    text: string;
    reviewer: string;
  };
  pageCount: number;
  language: string;
  publishingCompany: {
    id: number;
    name: string;
  };
  publishingDate: Date;
  dimensions: {
    id: number;
    bookId: number;
    width: number;
    height: number;
    depth: number;
  };
}
