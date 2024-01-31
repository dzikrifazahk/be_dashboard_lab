import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('examinations_laboratorium')
export class ExaminationsLaboratoriumEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'user_id',
    type: 'varchar',
  })
  userId: string;

  @Column({
    name: 'registration_id',
    type: 'varchar',
  })
  registrationId: string;

  @Column({
    name: 'sequence',
    type: 'integer',
  })
  sequence: number;

  @Column({
    name: 'departement_name',
    type: 'varchar',
  })
  departementName: string;

  @Column({
    name: 'parameter_id',
    type: 'varchar',
  })
  parameterId: string;

  @Column({
    name: 'parameter_test',
    type: 'varchar',
  })
  parameterTest: string;

  @Column({
    name: 'type',
    type: 'varchar',
  })
  type: string;

  @Column({
    name: 'flag',
    type: 'varchar',
  })
  flag: string;

  @Column({
    name: 'value',
    type: 'text',
  })
  value: Text;

  @Column({
    name: 'reference_value',
    type: 'varchar',
  })
  referenceValue: string;

  @Column({
    name: 'result_type',
    type: 'varchar',
  })
  resultType: string;

  @Column({
    name: 'ns1',
    type: 'varchar',
  })
  ns1: string;

  @Column({
    name: 'verified_by',
    type: 'varchar',
  })
  verifiedBy: string;

  @Column({
    name: 'verified_at',
    type: 'date',
  })
  verifiedAt: Date;

  @Column({
    name: 'validated_by',
    type: 'varchar',
  })
  validateBy: string;

  @Column({
    name: 'validated_at',
    type: 'varchar',
  })
  validatedAt: string;

  @Column({
    name: 'is_abnormal',
    type: 'varchar',
  })
  isAbnormal: string;

  @Column({
    name: 'is_critical',
    type: 'varchar',
  })
  isCritical: string;

  @Column({
    name: 'comment_test',
    type: 'varchar',
  })
  commentTest: string;

  @Column({
    name: 'departement_id',
    type: 'varchar',
  })
  departementId: string;

  @Column({
    name: 'parent_id',
    type: 'varchar',
  })
  parent_id: string;
  
}
