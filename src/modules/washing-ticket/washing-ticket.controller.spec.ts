import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { WashingTicketController } from './washing-ticket.controller';
import { WashingTicketService } from './washing-ticket.service';

describe('WashingTicketController', () => {
  let controller: WashingTicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WashingTicketController],
      providers: [WashingTicketService],
    }).compile();

    controller = module.get<WashingTicketController>(WashingTicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
