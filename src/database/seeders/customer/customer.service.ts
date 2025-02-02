import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { Model } from 'mongoose';
import { COMMON_CONSTANT } from 'src/constants/common.constant';
import { Customer } from 'src/modules/customer/entities/customer.entity';

import { customerSeedData } from './data';
import type { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerSeederService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  create(): Array<Promise<Customer>> {
    return customerSeedData.map(async (customer: CreateCustomerDto) => {
      try {
        const checkExistcustomer = await this.customerModel.findOne({
          username: customer.username,
        });

        if (checkExistcustomer != null) {
          return Promise.resolve(null);
        }

        const hashPassword = await hash(
          customer.password,
          COMMON_CONSTANT.BCRYPT_SALT_ROUND,
        );
        customer.password = hashPassword;

        return Promise.resolve(await this.customerModel.create(customer));
      } catch (error: unknown) {
        return Promise.reject(error);
      }
    });
  }
}
