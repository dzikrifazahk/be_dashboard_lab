import { Test, TestingModule } from '@nestjs/testing';
import { PatientsDiagnoseService } from './patients-diagnose.service';

describe('PatientsDiagnoseService', () => {
  let service: PatientsDiagnoseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientsDiagnoseService],
    }).compile();

    service = module.get<PatientsDiagnoseService>(PatientsDiagnoseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
