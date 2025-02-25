import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({
    required: true,
    example: 'hieunq@pip.vn',
  })
  @MinLength(6)
  @IsEmail()
  username: string;

  @ApiProperty({
    required: true,
    example: '123456',
  })
  @MinLength(6)
  @IsString()
  password: string;
}
