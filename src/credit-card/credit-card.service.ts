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
    console.log(payload);
    const user: User = await this.userService.getUserById(payload.userId);
    const brand: string = this.getCardBrand(payload.cc_number);

    const creditCard = this.creditCardRepository.create({
      cc_num: payload.cc_number,
      expires_at: payload.expires_at,
      brand: brand,
      user: user,
    });

    return await this.creditCardRepository.save(creditCard);
  }
}
