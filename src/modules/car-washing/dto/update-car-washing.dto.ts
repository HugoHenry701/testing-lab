import { PartialType } from '@nestjs/swagger';

import { CreateCarWashingDto } from './create-car-washing.dto';

export class UpdateCarWashingDto extends PartialType(CreateCarWashingDto) {}
