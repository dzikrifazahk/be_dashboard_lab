import { CommonColumn } from 'src/common/column/common-column';
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
export class PatientEntity extends CommonColumn {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'mrn',
    type: 'varchar',
  })
  mrn: string;

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
    type: 'varchar',
    nullable: true,
  })
  placeOfBirth: string;

  @Column({
    name: 'id_number',
    type: 'varchar',
    nullable: true,
  })
  idNumber: string;

  @Column({
    name: 'phone_number',
    type: 'varchar',
    nullable: true,
  })
  phoneNumber: string;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: true,
  })
  email: string;

  @Column({
    name: 'address',
    type: 'varchar',
    nullable: true,
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
