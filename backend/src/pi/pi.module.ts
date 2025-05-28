import { Module } from '@nestjs/common';
import { PiService } from './pi.service';
import { PiController } from './pi.controller';

@Module({
  providers: [PiService],
  controllers: [PiController],
})
export class PiModule {}
