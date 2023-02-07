import { Book } from 'src/book/book.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dimension {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  width: number;
  @Column()
  height: number;
  @Column()
  depth: number;
}
