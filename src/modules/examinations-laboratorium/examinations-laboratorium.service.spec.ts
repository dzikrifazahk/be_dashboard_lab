import { Test, TestingModule } from '@nestjs/testing';
import { ExaminationsLaboratoriumService } from './examinations-laboratorium.service';

describe('ExaminationsLaboratoriumService', () => {
  let service: ExaminationsLaboratoriumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExaminationsLaboratoriumService],
    }).compile();

    service = module.get<ExaminationsLaboratoriumService>(ExaminationsLaboratoriumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
