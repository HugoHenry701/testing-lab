import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import type Redis from 'ioredis';
import { Model } from 'mongoose';
import { CACHE_CONSTANT } from 'src/constants/cache.constant';
import { COMMON_CONSTANT } from 'src/constants/common.constant';
import { ERROR } from 'src/constants/exception.constant';
import { Customer } from 'src/entities/customer.entity';
import { BaseException } from 'src/shared/filters/exception.filter';
import { ApiConfigService } from 'src/shared/services/api-config.service';

import type { ShortCustomerInfoDto } from './dto/short-customer-info.dto';

@Injectable()
export class CustomerService {
  private redisInstance: Redis;

  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
    private readonly apiConfigService: ApiConfigService,
  ) {
    this.redisInstance = this.redisService.getClient(
      COMMON_CONSTANT.REDIS_DEFAULT_NAMESPACE,
    );
  }

  async getListCustomer(): Promise<ShortCustomerInfoDto[]> {
    const listCustomer = await this.customerModel.find({});

    if (listCustomer.length === 0) {
      throw new BaseException(ERROR.DATA_NOT_FOUND);
    }

    await this.redisInstance.hset(
      `${CACHE_CONSTANT.SESSION_PREFIX}listCustomer`,
      listCustomer,
    );
    const listCustomerResult: ShortCustomerInfoDto[] = listCustomer.map(
      (e) => ({
        customer_id: e._id.toString(),
        customer_username: e.username,
      }),
    );

    return listCustomerResult;
  }
}
