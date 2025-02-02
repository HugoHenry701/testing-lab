import { RedisManager } from '@liaoliaots/nestjs-redis';
import { JwtService } from '@nestjs/jwt';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { ApiConfigService } from 'src/shared/services/api-config.service';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
