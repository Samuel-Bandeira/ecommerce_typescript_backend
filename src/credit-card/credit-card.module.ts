import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardController } from './credit-card.controller';
import { CreditCard } from './credit-card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditCard, User]), UserModule],
  controllers: [CreditCardController],
  providers: [CreditCardService],
})
export class CreditCardModule {}
