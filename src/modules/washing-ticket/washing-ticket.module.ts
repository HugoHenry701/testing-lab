import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  WashingTicket,
  WashingTicketSchema,
} from 'src/modules/washing-ticket/entities/washing-ticket.entity';

import { WashingTicketController } from './washing-ticket.controller';
import { WashingTicketService } from './washing-ticket.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WashingTicket.name,
        schema: WashingTicketSchema,
      },
    ]),
  ],
  controllers: [WashingTicketController],
  providers: [WashingTicketService],
})
export class WashingTicketModule {}
