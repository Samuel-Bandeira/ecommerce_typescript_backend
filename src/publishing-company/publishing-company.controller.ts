import { Body, Controller, Post } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { PublishingCompany } from './publishing-company.entity';
import { PublishingCompanyService } from './publishing-company.service';

@Controller('publisher')
export class PublishingCompanyController {
  constructor(
    private readonly publishingCompanyService: PublishingCompanyService,
  ) {}

  @Post()
  async createPublisher(@Body() body: any): Promise<PublishingCompany> {
    return await this.publishingCompanyService.createPublisher(body);
  }

  @Get()
  async getPublishers(): Promise<PublishingCompany[]> {
    return await this.publishingCompanyService.getPublishers();
  }

  @Get('/:id')
  async getPublisher(@Param('id') id: number): Promise<PublishingCompany> {
    return await this.publishingCompanyService.getPublisher(id);
  }
}
