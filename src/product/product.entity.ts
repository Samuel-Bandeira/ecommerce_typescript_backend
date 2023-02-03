import { OrderItem } from 'src/order-item/order-item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  price: number;
  @Column()
  stock_count: number;
  @OneToMany((type) => OrderItem, (orderItem) => orderItem.product)
  orders: OrderItem[];
  //@ManyToOne()
  //one
  //brand will be defined on the run
  //relation with user, many to one
}
