import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Customer,
  CustomerSchema,
} from 'src/modules/customer/entities/customer.entity';

import { CustomerSeederService } from './customer.service';

/**
 * Import and provide seeder classes for users.
 *
 * @module
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
    ]),
  ],
  providers: [CustomerSeederService],
  exports: [CustomerSeederService],
})
export class CustomerSeederModule {}
