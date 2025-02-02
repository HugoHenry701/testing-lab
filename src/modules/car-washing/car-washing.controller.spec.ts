import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { CarWashingController } from './car-washing.controller';
import { CarWashingService } from './car-washing.service';

describe('CarWashingController', () => {
  let controller: CarWashingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarWashingController],
      providers: [CarWashingService],
    }).compile();

    controller = module.get<CarWashingController>(CarWashingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
