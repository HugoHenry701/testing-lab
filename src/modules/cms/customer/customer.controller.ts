import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/constants/role.constant';
import { Roles } from 'src/shared/decorators/auth.decorator';

import { CustomerService } from './customer.service';
import type { ShortCustomerInfoDto } from './dto/short-customer-info.dto';

@Controller('cms/customer')
@ApiTags('Auth')
@ApiBearerAuth()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('list-customer')
  @Roles([Role.Admin])
  async listCustomer(): Promise<ShortCustomerInfoDto[]> {
    const listCustomerResult = await this.customerService.getListCustomer();

    return listCustomerResult;
  }
}
