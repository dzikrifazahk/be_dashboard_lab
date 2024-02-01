import { CommonColumn } from 'src/common/column/common-column';
import { PatientEntity } from 'src/modules/patients/entities/patient.entity';
import { RegistrationEntity } from 'src/modules/registrations/entities/registration.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('patients_diagnose')
export class PatientsDiagnoseEntity extends CommonColumn {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'patient_id',
    type: 'varchar',
  })
  patientId: string;

  @Column({
    name: 'registration_id',
    type: 'varchar',
  })
  registrationId: string;

  @Column({
    name: 'code',
    type: 'integer',
  })
  code: number;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @ManyToOne(() => PatientEntity, (patient) => patient.diagnose)
  @JoinColumn({
    name: 'patient_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_registration_patient',
  })
  patient: PatientEntity;

  @ManyToOne(() => RegistrationEntity, (reg) => reg.diagnose)
  @JoinColumn({
    name: 'registration_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_diagnose_patient',
  })
  registration: RegistrationEntity;
}
