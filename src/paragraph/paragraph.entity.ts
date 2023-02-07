import { Description } from 'src/description/description.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paragraph {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
  @Column()
  position: number;
  @ManyToOne(() => Description, (description) => description.paragraphs)
  description: Description;
}
