import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Product } from 'src/product/product.entity';
@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantity: string;
  @ManyToOne((type) => Product, (product) => product.orders)
  product: Product;
  //@ManyToOne()
  //one
  //brand will be defined on the run
  //relation with user, many to one
}
