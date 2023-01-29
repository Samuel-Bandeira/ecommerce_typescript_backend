import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  //relation with credit cards, one to many
  //relation with order, one to many

  constructor(name, lastName, email, password) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
