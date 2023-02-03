import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.entity';
import { CreditCard } from './credit-card/credit-card.entity';
import { OrderItemModule } from './order-item/order-item.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';
import { OrderItem } from './order-item/order-item.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: `postgres://postgres:${process.env.DATABASE_PASSWORD}@localhost:5432/ecommerce`,
      entities: [User, CreditCard, Product, OrderItem],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CreditCardModule,
    OrderItemModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
