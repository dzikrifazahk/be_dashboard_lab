import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientsDiagnoseDto } from './create-patients-diagnose.dto';

export class UpdatePatientsDiagnoseDto extends PartialType(CreatePatientsDiagnoseDto) {}
