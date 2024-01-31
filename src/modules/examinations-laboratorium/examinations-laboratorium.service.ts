import { Injectable } from '@nestjs/common';
import { CreateExaminationsLaboratoriumDto } from './dto/create-examinations-laboratorium.dto';
import { UpdateExaminationsLaboratoriumDto } from './dto/update-examinations-laboratorium.dto';

@Injectable()
export class ExaminationsLaboratoriumService {
  create(createExaminationsLaboratoriumDto: CreateExaminationsLaboratoriumDto) {
    return 'This action adds a new examinationsLaboratorium';
  }

  findAll() {
    return `This action returns all examinationsLaboratorium`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examinationsLaboratorium`;
  }

  update(id: number, updateExaminationsLaboratoriumDto: UpdateExaminationsLaboratoriumDto) {
    return `This action updates a #${id} examinationsLaboratorium`;
  }

  remove(id: number) {
    return `This action removes a #${id} examinationsLaboratorium`;
  }
}
