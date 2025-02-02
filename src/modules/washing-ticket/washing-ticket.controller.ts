import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateWashingTicketDto } from './dto/create-washing-ticket.dto';
import { UpdateWashingTicketDto } from './dto/update-washing-ticket.dto';
import { WashingTicketService } from './washing-ticket.service';

@Controller('washing-ticket')
@ApiTags('WashingTicket')
export class WashingTicketController {
  constructor(private readonly washingTicketService: WashingTicketService) {}

  @Post()
  create(@Body() createWashingTicketDto: CreateWashingTicketDto) {
    return this.washingTicketService.create(createWashingTicketDto);
  }

  @Get()
  findAll() {
    return this.washingTicketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.washingTicketService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWashingTicketDto: UpdateWashingTicketDto,
  ) {
    return this.washingTicketService.update(id, updateWashingTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.washingTicketService.remove(Number(id));
  }
}
