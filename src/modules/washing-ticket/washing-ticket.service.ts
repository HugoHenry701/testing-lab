import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import type Redis from 'ioredis';
import moment from 'moment';
import { Model } from 'mongoose';
import { COMMON_CONSTANT } from 'src/constants/common.constant';
import { WashingTicket } from 'src/modules/washing-ticket/entities/washing-ticket.entity';
import { ApiConfigService } from 'src/shared/services/api-config.service';

import type { CreateWashingTicketDto } from './dto/create-washing-ticket.dto';
import type { UpdateWashingTicketDto } from './dto/update-washing-ticket.dto';
import type { WashingTicketInfoDto } from './dto/washing-ticket-info.dto';

@Injectable()
export class WashingTicketService {
  private redisInstance: Redis;

  constructor(
    @InjectModel(WashingTicket.name)
    private washingTicketModel: Model<WashingTicket>,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
    private readonly apiConfigService: ApiConfigService,
  ) {
    this.redisInstance = this.redisService.getClient(
      COMMON_CONSTANT.REDIS_DEFAULT_NAMESPACE,
    );
  }

  async create(createWashingTicketDto: CreateWashingTicketDto) {
    await this.washingTicketModel.create({
      ticket_code: createWashingTicketDto.ticket_code,
      checkin: createWashingTicketDto.checkin,
      checkout: createWashingTicketDto.checkout,
      customer: createWashingTicketDto.customer_id,
      price: createWashingTicketDto.price,
    });

    return 'This action adds a new washingTicket';
  }

  async findAll(): Promise<WashingTicketInfoDto[]> {
    let result: WashingTicketInfoDto[] = [];
    const washingTicketList = await this.washingTicketModel.find();

    result = washingTicketList.map((e) => ({
      ticket_code: e.ticket_code,
      checkin: e.checkin,
      checkout: e.checkout,
      price: e.price,
      customer: e.customer,
      created_at: moment(e.created_at).format('DD/MM/YYYY HH:mm'),
      updated_at: moment(e.updated_at).format('DD/MM/YYYY HH:mm'),
    }));

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} washingTicket`;
  }

  async update(id: string, updateWashingTicketDto: UpdateWashingTicketDto) {
    await this.washingTicketModel.findByIdAndUpdate(id, {
      checkin: updateWashingTicketDto.checkin,
      checkout: updateWashingTicketDto.checkout,
    });

    return `This action updates a #${id} washingTicket`;
  }

  remove(id: number) {
    return `This action removes a #${id} washingTicket`;
  }
}
