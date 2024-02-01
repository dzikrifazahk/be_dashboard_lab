import { Injectable } from '@nestjs/common';
import { CreateRegistrationDtoIn } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { CreateRegistrationService } from './registration.create.service';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationEntity } from './entities/registration.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationsService {
  constructor(
    @InjectRepository(RegistrationEntity)
    private readonly registrationRepository: Repository<RegistrationEntity>,
    private readonly createRegistrationService: CreateRegistrationService,
  ){}

  async createRegistrations(createRegistrationDto: CreateRegistrationDtoIn, createdBy: string) { 
    const createRegistration = await this.createRegistrationService.create(createRegistrationDto, createdBy);
    return {message: createRegistration.message, data: createRegistration.data};
  }

  async getRegistrations() {
    const getRegistrations = await this.registrationRepository
      .createQueryBuilder('registrations')
      .orderBy('registrations.createdAt', 'DESC')
      .leftJoinAndSelect('registrations.patient', 'patient')
      .leftJoinAndSelect('registrations.user', 'user')
      .getMany();

    return getRegistrations;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} registration`;
  // }

  // update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
  //   return `This action updates a #${id} registration`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} registration`;
  // }
}
