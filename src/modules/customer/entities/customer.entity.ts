import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Customer {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  created_at: Date;

  updated_at: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
