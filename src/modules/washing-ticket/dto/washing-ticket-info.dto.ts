import type { Customer } from 'src/modules/customer/entities/customer.entity';

export class WashingTicketInfoDto {
  ticket_code: string;

  checkin: number;

  checkout: number;

  customer: Customer;

  price: number;

  updated_at: string;

  created_at: string;
}
