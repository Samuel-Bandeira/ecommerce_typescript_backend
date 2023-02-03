import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/user.entity';
@Entity()
export class CreditCard {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cc_num: number;
  @Column()
  expires_at: string;
  @Column()
  holder_name: string;
  @Column()
  brand: string;
  @ManyToOne((type) => User, (user) => user.creditCards)
  user: User;

  //brand will be defined on the run
  //relation with user, many to one
}
