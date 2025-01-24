import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  password: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
