import { PartialType } from '@nestjs/mapped-types';
import { CreateExaminationsLaboratoriumDto } from './create-examinations-laboratorium.dto';

export class UpdateExaminationsLaboratoriumDto extends PartialType(CreateExaminationsLaboratoriumDto) {}
