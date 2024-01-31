import { Test, TestingModule } from '@nestjs/testing';
import { PatientsDiagnoseController } from './patients-diagnose.controller';
import { PatientsDiagnoseService } from './patients-diagnose.service';

describe('PatientsDiagnoseController', () => {
  let controller: PatientsDiagnoseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientsDiagnoseController],
      providers: [PatientsDiagnoseService],
    }).compile();

    controller = module.get<PatientsDiagnoseController>(PatientsDiagnoseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
