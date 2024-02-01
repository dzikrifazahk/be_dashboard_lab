import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationEntity } from './entities/registration.entity';
import { Repository, createQueryBuilder } from 'typeorm';
import { CreateRegistrationDtoIn } from './dto/create-registration.dto';
import { PatientEntity } from '../patients/entities/patient.entity';
import { PatientsService } from '../patients/patients.service';
import { CreatePatientDtoIn } from '../patients/dto/create-patient.dto';
import { DateService } from 'src/common/services/date-services';

@Injectable()
export class CreateRegistrationService {
  constructor(
    @InjectRepository(RegistrationEntity)
    private readonly registrationRepository: Repository<RegistrationEntity>,
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<PatientEntity>,
    private readonly patientService: PatientsService,
  ) {}

  async create(dto: CreateRegistrationDtoIn, createdBy: string) {
    let createNewPatient;
    let message: string;
    let newRegistration;
    const uppercaseName = dto.name.toUpperCase();

    const patient = await this.patientRepository
      .createQueryBuilder('patients')
      .where('UPPER(patients.name) LIKE :name', { name: `%${uppercaseName}%` })
      .andWhere('patients.dateOfBirth = :dateOfBirth', {
        dateOfBirth: dto.dateOfBirth,
      })
      .andWhere('patients.gender = :gender', { gender: dto.gender })
      .getOne();

    const todayRegister = await this.registrationRepository
      .createQueryBuilder('registrations')
      .where('registrations.created_at BETWEEN :startDate AND :endDate', {
        startDate: DateService.toMidnight(new Date()),
        endDate: DateService.toLastTimeOfTheDay(new Date()),
      })
      .getMany();
    console.log('INI PASIEN ', patient);

    const regNum = todayRegister.length + 1;
    const parsedRegNum = regNum.toString();

    console.log('INI DTO NYA', dto);
    if (!patient) {
      const mrn = this.patientService.generateMRN();
      // createNewPatient = { ...dto, mrn };
      const newPatient: CreatePatientDtoIn = {
        name: dto.name,
        gender: dto.gender,
        mrn: mrn,
        dateOfBirth: dto.dateOfBirth,
        placeOfBirth: dto.placeOfBirth,
        idNumber: dto.idNumber,
        phoneNumber: dto.phoneNumber,
        email: dto.email,
        address: dto.address,
      };
      createNewPatient = await this.patientService.createPatient(newPatient);

      console.log('SETELAH DIISI PASSSIEN', createNewPatient);

      newRegistration = await this.registrationRepository.create({
        ...dto,
        registrationNumber: parsedRegNum,
        userId: createdBy,
        patientId: createNewPatient.id,
        patientMrn: createNewPatient.mrn,
      });

      await this.registrationRepository.save(newRegistration);
      message = 'Including New Patient';
    } else {
      message = 'Success Register With Exist Patient';
      newRegistration = await this.registrationRepository.create({
        ...dto,
        registrationNumber: parsedRegNum,
        userId: createdBy,
        patientId: patient.id,
        patientMrn: patient.mrn,
      });
      await this.registrationRepository.save(newRegistration);
    }

    console.log('INI REGISTRASI BARU ', newRegistration);

    return { message: message, data: newRegistration };
  }

  
 
}
