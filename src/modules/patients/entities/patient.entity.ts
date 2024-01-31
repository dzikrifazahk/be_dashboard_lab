import { PatientsDiagnoseEntity } from 'src/modules/patients-diagnose/entities/patients-diagnose.entity';
import { RegistrationEntity } from 'src/modules/registrations/entities/registration.entity';
import {
  Column,
  ColumnTypeUndefinedError,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('patients')
export class PatientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'gender',
    type: 'varchar',
  })
  gender: string;

  @Column({
    name: 'date_of_birth',
    type: 'date',
  })
  dateOfBirth: Date;

  @Column({
    name: 'place_of_birth',
    type: 'date',
  })
  placeOfBirth: Date;

  @Column({
    name: 'id_number',
    type: 'varchar',
  })
  idNumber: string;

  @Column({
    name: 'phone_number',
    type: 'varchar',
  })
  phoneNumber: string;

  @Column({
    name: 'email',
    type: 'varchar',
  })
  email: string;

  @Column({
    name: 'address',
    type: 'varchar',
  })
  address: string;

  @OneToMany(() => RegistrationEntity, (reg) => reg.patient, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  registration: RegistrationEntity[];

  @OneToMany(() => PatientsDiagnoseEntity, (diagnose) => diagnose.patient)
  diagnose: PatientsDiagnoseEntity[];
}
