import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateRegistrationDtoIn {
  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    example: 'laki-laki',
  })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({
    type: Date,
    example: '2023-04-10',
  })
  @IsDate()
  @IsNotEmpty() 
  dateOfBirth: Date;

  @ApiProperty({
    type: String,
    example: '1',
  })
  @IsString()
  @IsNotEmpty()
  placeOfBirth: string;

  @ApiProperty({
    type: String,
    example: '55244363',
  })
  idNumber: string;

  @ApiProperty({
    type: String,
    example: '08912636123',
  })
  phoneNumber: string;

  @ApiProperty({
    type: String,
    example: 'johndoe@gmail.com',
  })
  email: string;

  @ApiProperty({
    type: String,
    example: 'cimahi, cimahi 40523',
  })
  address: string;

  @ApiProperty({
    type: String,
    example: '1',
  })
  visitNumber: string;
}

export class CreateRegistrationDtoOut {
  @ApiProperty({
    type: String,
    example: '836518291',
  })
  @IsString()
  registrationId: string;
}

export class GetRegistrationDto {
  @ApiProperty({
    type: String,
    example: '836518291',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  patientId: string;

  @ApiProperty({
    type: String,
    example: '1702635123',
  })
  patientMrn: string;

  @ApiProperty({
    type: String,
    example: '1',
  })
  registrationNumber: string;

  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    type: String,
    example: 'laki-laki'
  })
  gender: string;
  
  @ApiProperty({
    type: Date,
    example: '2023-04-10 10:39:37',
  })
  dateOfBirth: Date;

  @ApiProperty({
    type: String,
    example: 'bandung',
  })
  placeOfBirth: string;

  @ApiProperty({
    type: String,
    example: '55244363',
  })
  idNumber: string;

  @ApiProperty({
    type: String,
    example: '08912636123',
  })
  phoneNumber: string;

  @ApiProperty({
    type: String,
    example: 'john.doe@gmail.com'
  })
  email: string;

  @ApiProperty({
    type: String,
    example: 'cimahi, cimahi 40523',
  })
  address: string;

  @ApiProperty({
    type: Date,
    example: '1',
  })
  visitNumber: string
}
