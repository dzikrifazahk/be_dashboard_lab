import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreatePatientDtoIn {
  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    example: '7192389123',
  })
  @IsString()
  @IsEmpty()
  mrn?: string;

  @ApiProperty({
    type: String,
    example: 'laki-laki',
  })
  @IsString()
  gender: string;

  @ApiProperty({
    type: Date,
    example: '2023-04-10',
  })
  @IsDate()
  dateOfBirth: Date;

  @ApiProperty({
    type: String,
    example: 'Bandung',
  })
  @IsString()
  placeOfBirth: string;

  @ApiProperty({
    type: String,
    example: '123456789',
  })
  @IsString()
  idNumber: string;

  @ApiProperty({
    type: String,
    example: '08123456789',
  })
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    type: String,
    example: 'dzikrifaza@gmail.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
    example: 'cimahi, cimahi',
  })
  @IsString()
  address: string;
}

export class CreatePatientDtoOut {
  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  patientName: string;
}
