import { Book } from 'src/book/book.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Book, (book) => book.images)
  book: Book;
  @Column()
  url: string;
  @Column()
  cover: boolean;
}
