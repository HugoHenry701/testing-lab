import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import type { HydratedDocument } from 'mongoose';
import mongoose from 'mongoose';

import { Customer } from '../../customer/entities/customer.entity';

export type WashingTicketDocument = HydratedDocument<WashingTicket>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class WashingTicket {
  @Prop()
  ticket_code: string;

  @Prop()
  checkin: number;

  @Prop()
  checkout: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Customer.name })
  @Type(() => Customer)
  customer: Customer;

  @Prop()
  price: number;

  created_at: Date;

  updated_at: Date;
}

export const WashingTicketSchema = SchemaFactory.createForClass(WashingTicket);
