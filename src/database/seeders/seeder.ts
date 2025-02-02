import { Injectable } from '@nestjs/common';

import { CustomerSeederService } from './customer/customer.service';
import { UserSeederService } from './user/user.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly userSeederService: UserSeederService,

    private readonly customerSeederService: CustomerSeederService,
  ) {}

  async seed() {
    await this.users()
      .then((completed) => {
        console.info('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        console.error('Failed seeding users...');
        Promise.reject(error);
      });
    await this.customers()
      .then((completed) => {
        console.info('Successfuly completed seeding customers...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        console.error('Failed seeding customers...');
        Promise.reject(error);
      });
  }

  async users() {
    return Promise.all(this.userSeederService.create())
      .then((createdUsers) => {
        // Can also use this.logger.verbose('...');
        console.info(
          `No. of users created : ${
            createdUsers.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length
          }`,
        );

        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }

  async customers() {
    return Promise.all(this.customerSeederService.create())
      .then((createdCustomers) => {
        // Can also use this.logger.verbose('...');
        console.info(
          `No. of customer created : ${
            createdCustomers.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length
          }`,
        );

        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
