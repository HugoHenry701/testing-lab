import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

import { CustomerSeederModule } from './customer/customer-seeder.module';
import { Seeder } from './seeder';
import { UserSeederModule } from './user/user-seeder.module';

config();
/**
 * Import and provide seeder classes.
 *
 * @module
 */
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UserSeederModule,
    CustomerSeederModule,
  ],
  providers: [Seeder],
})
export class SeederModule {}
