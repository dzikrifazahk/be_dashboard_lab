import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

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
        name:  'laki-laki'
    })
    @IsString()
    gender: string;

    @ApiProperty({
        type: String,
        name: '2000-01-01'
    })
    @IsDate()
    dateOfBirth: Date;

    @ApiProperty({
        type: String,
        name: 'Bandung'
    })
    @IsDate()
    placeOfBirth: string;

    @ApiProperty({
        type: String,
        name: '123456789'
    })
    @IsString()
    idNumber: string;

    @ApiProperty({
        type: String,
        name: '08123456789'
    })
    @IsString()
    phoneNumber: string;

    @ApiProperty({
        type: String,
        name: 'dzikrifaza@gmail.com'
    })
    @IsString()
    email: string;

    @ApiProperty({
        type: String,
        name: 'cimahi, cimahi'
    })
    @IsString()
    address: string;
}

export class CreatePatientDtoOut {
    @ApiProperty({
        type: String,
        example: 'John Doe'
    })
    @IsString()
    @IsNotEmpty()
    patientName: string;
}