import { Author } from 'src/author/author.entity';
import { Description } from 'src/description/description.entity';
import { Dimension } from 'src/dimensions/dimensions.entity';
import { Image } from 'src/image/image.entity';
import { PublishingCompany } from 'src/publishing-company/publishing-company.entity';
import { Review } from 'src/review/review.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

interface BookI {
  id: number;
  title: string;
  authors: Author[];
  images: Image[];
  price: number;
  rating: number;
  numberOfClientRatings: number;
  description: Description;
  reviews: Review[];
  pageCount: number;
  language: string;
  publishingCompany: PublishingCompany;
  publishingDate: Date;
  dimension: Dimension;
}

@Entity()
export class Book implements BookI {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @ManyToMany(() => Author)
  @JoinTable()
  authors: Author[];
  @OneToMany(() => Image, (image) => image.book)
  images: Image[];
  @Column()
  price: number;
  @Column()
  rating: number;
  @Column()
  numberOfClientRatings: number;
  @OneToOne(() => Description)
  @JoinColumn()
  description: Description;
  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];
  @Column()
  pageCount: number;
  @Column()
  language: string;
  @ManyToOne(() => PublishingCompany, (p) => p.books)
  publishingCompany: PublishingCompany;
  @Column()
  publishingDate: Date;
  @OneToOne(() => Dimension)
  @JoinColumn()
  dimension: Dimension;
}
