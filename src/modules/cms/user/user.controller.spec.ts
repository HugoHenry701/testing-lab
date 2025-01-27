import { RedisManager } from '@liaoliaots/nestjs-redis';
import { JwtService } from '@nestjs/jwt';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { ApiConfigService } from 'src/shared/services/api-config.service';

import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserController,
        UserService,
        {
          provide: 'UserModel',
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

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
