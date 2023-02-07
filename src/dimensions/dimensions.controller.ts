import { Controller } from '@nestjs/common';
import { DimensionsService } from './dimensions.service';

@Controller('dimensions')
export class DimensionsController {
  constructor(private readonly dimensionsService: DimensionsService) {}
}
