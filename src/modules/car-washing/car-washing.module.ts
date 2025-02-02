import { Module } from '@nestjs/common';

import { CarWashingController } from './car-washing.controller';
import { CarWashingService } from './car-washing.service';

@Module({
  controllers: [CarWashingController],
  providers: [CarWashingService],
})
export class CarWashingModule {}
