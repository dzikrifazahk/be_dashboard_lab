import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientEntity } from './entities/patient.entity';
import {
  CreatePatientDtoIn,
  CreatePatientDtoOut,
} from './dto/create-patient.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<PatientEntity>,
  ) {}

  generateMRN() {
    return new Date().getTime().toString();
  }

  async createPatient(dto: CreatePatientDtoIn) {
    const MINIMUM_NAME_LENGTH = 1;

    if (dto.name.length < MINIMUM_NAME_LENGTH) {
      throw new BadRequestException(
        `name should be at least ${MINIMUM_NAME_LENGTH} character long`,
      );
    }
    const mrn = this.generateMRN();

    const newPatient = this.patientRepository.create({
      ...dto,
      mrn
    });
    console.log('ini create patient' , newPatient)
    await this.patientRepository.save(newPatient);

    return newPatient;
  }

  async getPatients() {
    const getPatients = await this.patientRepository
      .createQueryBuilder('patients')
      .orderBy('LOWER(patients.name)', 'ASC') // Order by name in ascending order
      .getMany();

    return getPatients;
  }

  async getOnePatient(id: string) {
    const findPatient = await this.patientRepository.findOneBy({
      id: id,
    });

    if (!findPatient) {
      throw new NotFoundException('Patients Not Found');
    }

    return findPatient;
  }

  // async deletePatient(id: string){
  //   const findPatient = await this.patientRepository.findOneBy({
  //     id: id
  //   })

  //   if (!findPatient){
  //     throw new NotFoundException('Patients Not Found')
  //   }

  //   await this.patientRepository.delete(findPatient);

  //   return findPatient;
  // }
}
