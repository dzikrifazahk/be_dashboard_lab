import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsDiagnoseService } from './patients-diagnose.service';
import { CreatePatientsDiagnoseDto } from './dto/create-patients-diagnose.dto';
import { UpdatePatientsDiagnoseDto } from './dto/update-patients-diagnose.dto';

@Controller('patients-diagnose')
export class PatientsDiagnoseController {
  constructor(private readonly patientsDiagnoseService: PatientsDiagnoseService) {}

  @Post()
  create(@Body() createPatientsDiagnoseDto: CreatePatientsDiagnoseDto) {
    return this.patientsDiagnoseService.create(createPatientsDiagnoseDto);
  }

  @Get()
  findAll() {
    return this.patientsDiagnoseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsDiagnoseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientsDiagnoseDto: UpdatePatientsDiagnoseDto) {
    return this.patientsDiagnoseService.update(+id, updatePatientsDiagnoseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsDiagnoseService.remove(+id);
  }
}
