import { Module } from '@nestjs/common';
import { PublishingCompanyService } from './publishing-company.service';
import { PublishingCompanyController } from './publishing-company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublishingCompany } from './publishing-company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PublishingCompany])],
  controllers: [PublishingCompanyController],
  providers: [PublishingCompanyService],
  exports: [PublishingCompanyService]
})
export class PublishingCompanyModule {}
