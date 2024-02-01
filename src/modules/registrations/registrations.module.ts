import { Module } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { RegistrationsController } from './registrations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationEntity } from './entities/registration.entity';
import { CreateRegistrationService } from './registration.create.service';
import { PatientEntity } from '../patients/entities/patient.entity';
import { PatientsService } from '../patients/patients.service';
import { UsersEntity } from '../users/entities/users.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegistrationEntity, PatientEntity, UsersEntity]),
    JwtModule,
  ],
  controllers: [RegistrationsController],
  providers: [RegistrationsService, CreateRegistrationService, PatientsService],
  exports: [TypeOrmModule, RegistrationsService],
})
export class RegistrationsModule {}
