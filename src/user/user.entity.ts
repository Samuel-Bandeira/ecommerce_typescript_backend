import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  //relation with credit cards, one to many
  //relation with order, one to many

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
