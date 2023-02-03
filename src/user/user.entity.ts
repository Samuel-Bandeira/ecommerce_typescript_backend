import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreditCard } from '../credit-card/credit-card.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany((type) => CreditCard, (creditCard) => creditCard.user, {
    nullable: true,
  })
  creditCards: CreditCard[];

  //relation with order, one to many

  constructor(name, lastName, email, password) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
