import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { CarWashingService } from './car-washing.service';

describe('CarWashingService', () => {
  let service: CarWashingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarWashingService],
    }).compile();

    service = module.get<CarWashingService>(CarWashingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
