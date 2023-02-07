import { Controller } from '@nestjs/common';
import { PublishingCompanyService } from './publishing-company.service';

@Controller('publishing-company')
export class PublishingCompanyController {
  constructor(private readonly publishingCompanyService: PublishingCompanyService) {}
}
