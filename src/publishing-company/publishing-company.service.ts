import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublishingCompany } from './publishing-company.entity';

@Injectable()
export class PublishingCompanyService {
  constructor(
    @InjectRepository(PublishingCompany)
    private readonly publisherRepository: Repository<PublishingCompany>,
  ) {}
  async createPublisher(body: any): Promise<PublishingCompany> {
    let publisherToCreate = {
      name: body.name,
    };
    if (body.books.length > 0) {
      //Implement it!
    }
    const publisher = this.publisherRepository.create(publisherToCreate);
    return await this.publisherRepository.save(publisher);
  }

  async getPublishers(): Promise<PublishingCompany[]> {
    return await this.publisherRepository.find();
  }

  async getPublisher(id: number): Promise<PublishingCompany> {
    return await this.publisherRepository.findOneBy({ id: id });
  }
}
