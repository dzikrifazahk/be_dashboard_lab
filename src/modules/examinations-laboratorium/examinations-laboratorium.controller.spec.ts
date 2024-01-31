import { Test, TestingModule } from '@nestjs/testing';
import { ExaminationsLaboratoriumController } from './examinations-laboratorium.controller';
import { ExaminationsLaboratoriumService } from './examinations-laboratorium.service';

describe('ExaminationsLaboratoriumController', () => {
  let controller: ExaminationsLaboratoriumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExaminationsLaboratoriumController],
      providers: [ExaminationsLaboratoriumService],
    }).compile();

    controller = module.get<ExaminationsLaboratoriumController>(ExaminationsLaboratoriumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
