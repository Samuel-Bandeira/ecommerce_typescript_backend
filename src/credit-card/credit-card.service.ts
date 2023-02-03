import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreditCard } from './credit-card.entity';
import { AddCardDto } from './dtos/addCard.dto';

@Injectable()
export class CreditCardService {
  constructor(
    @InjectRepository(CreditCard)
    private creditCardRepository: Repository<CreditCard>,
    private readonly userService: UserService,
  ) {}

  getCardBrand(cc_number: number) {
    return 'Visa';
  }

  async addCard(payload: AddCardDto): Promise<CreditCard> {
    const user: User = await this.userService.getUserById(payload.userId);
    const brand: string = this.getCardBrand(payload.cardNumber);
    const creditCard: CreditCard = this.creditCardRepository.create({
      cc_num: payload.cardNumber,
      holder_name: payload.cardName,
      expires_at: payload.expiresAt,
      brand: brand,
      user: user,
    });

    return await this.creditCardRepository.save(creditCard);
  }
}
