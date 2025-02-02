import { Injectable } from '@nestjs/common';

import type { CreateCarWashingDto } from './dto/create-car-washing.dto';
import type { UpdateCarWashingDto } from './dto/update-car-washing.dto';

@Injectable()
export class CarWashingService {
  create(createCarWashingDto: CreateCarWashingDto) {
    return 'This action adds a new carWashing';
  }

  findAll() {
    return `This action returns all carWashing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carWashing`;
  }

  update(id: number, updateCarWashingDto: UpdateCarWashingDto) {
    return `This action updates a #${id} carWashing`;
  }

  remove(id: number) {
    return `This action removes a #${id} carWashing`;
  }
}
