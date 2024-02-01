import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { RegistrationsService } from './registrations.service';
import {
  CreateRegistrationDtoIn,
  GetRegistrationDto,
} from './dto/create-registration.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateRegistrationService } from './registration.create.service';
import { BaseDto } from 'src/common/dtos/base.dto';
import { IAuthRequest, JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@ApiTags('registrations')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('registrations')
export class RegistrationsController {
  constructor(
    private readonly registrationsService: RegistrationsService,
    private readonly createRegistration: CreateRegistrationService,
  ) {}

  @Post('/create')
  @ApiResponse({
    type: CreateRegistrationDtoIn,
  })
  @ApiOperation({
    summary: 'Create registration',
    description: 'Create registration directly',
  })
  async create(
    @Body() createRegistrationDto: CreateRegistrationDtoIn,
    @Req() req: IAuthRequest,
  ) {
    const result = await this.registrationsService.createRegistrations(
      createRegistrationDto,
      req.user.userId,
    );
    return new BaseDto(result.message, result.data);
  }

  @Get('/')
  @ApiOperation({
    summary: 'get registrations',
    description: 'get all registrations on database',
  })
  @ApiResponse({
    type: GetRegistrationDto,
  })
  async findAll() {
    const getAllRegistrations =
      await this.registrationsService.getRegistrations();
    return new BaseDto('get all registrations success', getAllRegistrations);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.registrationsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
  //   return this.registrationsService.update(+id, updateRegistrationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.registrationsService.remove(+id);
  // }
}
