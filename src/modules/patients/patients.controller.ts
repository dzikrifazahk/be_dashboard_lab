import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePatientDtoIn, CreatePatientDtoOut } from './dto/create-patient.dto';
import { BaseDto } from 'src/common/dtos/base.dto';

@ApiTags('patients')
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post('/create')
  @ApiResponse({
    type: CreatePatientDtoOut
  })
  @ApiOperation({
    summary: 'Create patient',
    description: 'Create patient directly'
  })
 async create(@Body() createPatientDto: CreatePatientDtoIn) {
    const result = await this.patientsService.createPatient(createPatientDto);
    return result;
  }

  @Get('/')
  @ApiResponse({
    type: CreatePatientDtoIn
  })
  @ApiOperation({
    summary: 'get patients',
    description: 'get all patient on database'
  })
  async findAll() {
    const getAllPatient = await this.patientsService.getPatients();
    return new BaseDto('get all patients success', getAllPatient);
  }

  @Get(':id')
  @ApiResponse({
    type: CreatePatientDtoIn
  })
  @ApiOperation({
    summary: 'get patient by id',
    description: 'get one patient with id'
  })
  async findOne(@Param('id') id: string) {
    const getOnePatient = await this.patientsService.getOnePatient(id)
    return new BaseDto('get one patient success', getOnePatient)
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
  //   return this.patientsService.update(+id, updatePatientDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.patientsService.remove(+id);
  // }
}
