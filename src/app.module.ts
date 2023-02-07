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
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { ImageModule } from './image/image.module';
import { DescriptionModule } from './description/description.module';
import { ReviewModule } from './review/review.module';
import { PublishingCompanyModule } from './publishing-company/publishing-company.module';
import { DimensionsModule } from './dimensions/dimensions.module';
import { ParagraphModule } from './paragraph/paragraph.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'ecommerce',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CreditCardModule,
    OrderItemModule,
    ProductModule,
    BookModule,
    AuthorModule,
    ImageModule,
    DescriptionModule,
    ReviewModule,
    PublishingCompanyModule,
    DimensionsModule,
    ParagraphModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
