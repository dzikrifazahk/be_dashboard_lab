import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDtoIn {
  @ApiProperty({
    type: String,
    required: true,
    example: 'admin',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Nguyen Van A',
  })
  @IsString()
  fullname: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'ad',
  })
  @IsString()
  aliasName: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'admin',
  })
  @IsString()
  role: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'pasteur, cimahi',
  })
  @IsString()
  address: string;

  @ApiProperty({
    type: Boolean,
    required: true,
    example: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  needChangePassword: boolean;
}

export class CreateUserDtoOut {
  @ApiProperty()
  userId: string;
}
