import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { WashingTicketService } from './washing-ticket.service';

describe('WashingTicketService', () => {
  let service: WashingTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WashingTicketService],
    }).compile();

    service = module.get<WashingTicketService>(WashingTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
