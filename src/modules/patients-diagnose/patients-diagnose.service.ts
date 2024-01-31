import { Injectable } from '@nestjs/common';
import { CreatePatientsDiagnoseDto } from './dto/create-patients-diagnose.dto';
import { UpdatePatientsDiagnoseDto } from './dto/update-patients-diagnose.dto';

@Injectable()
export class PatientsDiagnoseService {
  create(createPatientsDiagnoseDto: CreatePatientsDiagnoseDto) {
    return 'This action adds a new patientsDiagnose';
  }

  findAll() {
    return `This action returns all patientsDiagnose`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientsDiagnose`;
  }

  update(id: number, updatePatientsDiagnoseDto: UpdatePatientsDiagnoseDto) {
    return `This action updates a #${id} patientsDiagnose`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientsDiagnose`;
  }
}
