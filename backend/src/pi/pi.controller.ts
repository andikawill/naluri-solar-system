import { Controller, Get } from '@nestjs/common';
import { PiService } from './pi.service';

@Controller('pi')
export class PiController {
  constructor(private readonly piService: PiService) {}

  @Get()
  getPi(): { pi: number; terms: number; updatedAt: string } {
    return this.piService.getPi();
  }
}
