import { Body, Controller, Post } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { AddCardDto } from './dtos/addCard.dto';

@Controller('credit-card')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Post()
  addCard(@Body() payload: AddCardDto) {
    return this.creditCardService.addCard(payload);
  }
}
