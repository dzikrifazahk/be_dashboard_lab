import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExaminationsLaboratoriumService } from './examinations-laboratorium.service';
import { CreateExaminationsLaboratoriumDto } from './dto/create-examinations-laboratorium.dto';
import { UpdateExaminationsLaboratoriumDto } from './dto/update-examinations-laboratorium.dto';

@Controller('examinations-laboratorium')
export class ExaminationsLaboratoriumController {
  constructor(private readonly examinationsLaboratoriumService: ExaminationsLaboratoriumService) {}

  @Post()
  create(@Body() createExaminationsLaboratoriumDto: CreateExaminationsLaboratoriumDto) {
    return this.examinationsLaboratoriumService.create(createExaminationsLaboratoriumDto);
  }

  @Get()
  findAll() {
    return this.examinationsLaboratoriumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examinationsLaboratoriumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExaminationsLaboratoriumDto: UpdateExaminationsLaboratoriumDto) {
    return this.examinationsLaboratoriumService.update(+id, updateExaminationsLaboratoriumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examinationsLaboratoriumService.remove(+id);
  }
}
