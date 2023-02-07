import { Book } from 'src/book/book.entity';
import { Paragraph } from 'src/paragraph/paragraph.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Description {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => Paragraph, (paragraph) => paragraph.description)
  paragraphs: string;
}
