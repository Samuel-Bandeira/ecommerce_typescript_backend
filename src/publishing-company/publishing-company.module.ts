import { Module } from '@nestjs/common';
import { PublishingCompanyService } from './publishing-company.service';
import { PublishingCompanyController } from './publishing-company.controller';

@Module({
  controllers: [PublishingCompanyController],
  providers: [PublishingCompanyService]
})
export class PublishingCompanyModule {}
