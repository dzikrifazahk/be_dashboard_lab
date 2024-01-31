import { Module } from '@nestjs/common';
import { ExaminationsLaboratoriumService } from './examinations-laboratorium.service';
import { ExaminationsLaboratoriumController } from './examinations-laboratorium.controller';

@Module({
  controllers: [ExaminationsLaboratoriumController],
  providers: [ExaminationsLaboratoriumService]
})
export class ExaminationsLaboratoriumModule {}
