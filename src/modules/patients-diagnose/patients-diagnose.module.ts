import { Module } from '@nestjs/common';
import { PatientsDiagnoseService } from './patients-diagnose.service';
import { PatientsDiagnoseController } from './patients-diagnose.controller';

@Module({
  controllers: [PatientsDiagnoseController],
  providers: [PatientsDiagnoseService]
})
export class PatientsDiagnoseModule {}
