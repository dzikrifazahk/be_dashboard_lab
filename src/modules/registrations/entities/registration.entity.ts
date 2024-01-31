import { PatientsDiagnoseEntity } from "src/modules/patients-diagnose/entities/patients-diagnose.entity";
import { PatientEntity } from "src/modules/patients/entities/patient.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('registrations')
export class RegistrationEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'user_id',
        type: 'varchar',
    })
    userId: string;

    @Column({
        name: 'patient_id',
        type: 'varchar',
    })
    patientId: string;

    @Column({
        name: 'registration_number',
        type: 'varchar',
    })
    registrationNumber: string;

    @Column({
        name: 'name',
        type: 'varchar',
    })
    name: string;

    @Column({
        name: 'gender',
        type: 'varchar'
    })
    gender: string;

    @Column({
        name: 'date_of_birth',
        type: 'date'
    })
    dateOfBirth: Date;

    @Column({
        name: 'place_of_birth',
        type: 'date'
    })
    placeOfBirth: Date;

    @Column({
        name: 'id_number',
        type: 'varchar'
    })
    idNumber: string;

    @Column({
        name: 'phone_number',
        type: 'varchar'
    })
    phoneNumber: string;

    @Column({
        name: 'email',
        type: 'varchar'
    })
    email: string;

    @Column({
        name: 'address',
        type: 'varchar'
    })
    address: string;

    @ManyToOne(() => PatientEntity, (patient) => patient.registration)
    @JoinColumn({
      name: 'patient_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_registration_patient',
    })
    patient: PatientEntity;

    @OneToMany(() => PatientsDiagnoseEntity, (diagnose) => diagnose.registration)
    diagnose: PatientsDiagnoseEntity[];
    
}