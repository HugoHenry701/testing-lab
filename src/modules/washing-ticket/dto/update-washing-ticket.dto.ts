import { PartialType } from '@nestjs/swagger';

import { CreateWashingTicketDto } from './create-washing-ticket.dto';

export class UpdateWashingTicketDto extends PartialType(
  CreateWashingTicketDto,
) {
  checkin: number;

  checkout: number;
}
