import { Controller } from '@nestjs/common';
import { ParagraphService } from './paragraph.service';

@Controller('paragraph')
export class ParagraphController {
  constructor(private readonly paragraphService: ParagraphService) {}
}
