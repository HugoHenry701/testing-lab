import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CarWashingService } from './car-washing.service';
import { CreateCarWashingDto } from './dto/create-car-washing.dto';
import { UpdateCarWashingDto } from './dto/update-car-washing.dto';

@Controller('car-washing')
export class CarWashingController {
  constructor(private readonly carWashingService: CarWashingService) {}

  @Post()
  create(@Body() createCarWashingDto: CreateCarWashingDto) {
    return this.carWashingService.create(createCarWashingDto);
  }

  @Get()
  findAll() {
    return this.carWashingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carWashingService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarWashingDto: UpdateCarWashingDto,
  ) {
    return this.carWashingService.update(Number(id), updateCarWashingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carWashingService.remove(Number(id));
  }
}
