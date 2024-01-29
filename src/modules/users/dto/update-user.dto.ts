import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDtoIn {
  @ApiProperty({
    type: String,
    example: 'user1',
  })
  username: string;

  @ApiProperty({
    type: String,
    example: 'Nguyen Van A',
  })
  fullname: string;

  @ApiProperty({
    type: String,
    example: 'ad',
  })
  aliasName: string;

  @ApiProperty({
    type: String,
    example: 'admin',
  })
  role: string;

  @ApiProperty({
    type: String,
    example: 'pasteur, cimahi',
  })
  address: string;
}

export class UpdateUserDtoOut {
  @ApiProperty({
    type: String,
    example: 'user1',
  })
  username: string;

  @ApiProperty({
    type: String,
    example: 'Nguyen Van A',
  })
  fullname: string;

  @ApiProperty({
    type: String,
    example: 'ad',
  })
  aliasName: string;

  @ApiProperty({
    type: String,
    example: 'admin',
  })
  role: string;

  @ApiProperty({
    type: String,
    example: 'pasteur, cimahi',
  })
  address: string;
}

