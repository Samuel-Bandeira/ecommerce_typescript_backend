import { Controller } from '@nestjs/common';
import { DescriptionService } from './description.service';

@Controller('description')
export class DescriptionController {
  constructor(private readonly descriptionService: DescriptionService) {}
}
