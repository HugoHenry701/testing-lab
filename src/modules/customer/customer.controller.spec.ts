import { RedisManager } from '@liaoliaots/nestjs-redis';
import { JwtService } from '@nestjs/jwt';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { ApiConfigService } from 'src/shared/services/api-config.service';

import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

describe('CustomerController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        CustomerService,
        {
          provide: 'CustomerModel',
          useValue: {
            findOne: jest.fn(), // Mock the method you need
            create: jest.fn(),
            save: jest.fn(),
          }, // Mocked CustomerModel
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          }, // Mocked JwtService
        },
        {
          provide: RedisManager,
          useValue: {
            getClient: jest.fn(),
          }, // Mocked RedisManager
        },
        {
          provide: ApiConfigService,
          useValue: {
            get: jest.fn(),
          }, // Mocked ApiConfigService
        },
      ],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
