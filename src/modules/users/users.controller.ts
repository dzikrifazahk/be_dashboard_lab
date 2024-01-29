import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  Injectable,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDtoIn } from './dto/update-user.dto';
import { CreateUserDtoIn } from './dto/create-user.dto';
import { BaseDto } from 'src/common/dtos/base.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @ApiResponse({
    type: CreateUserDtoIn,
  })
  @ApiOperation({
    summary: 'creating an user',
    description: 'Creating for an user and requests from the frontend.',
  })
  async createUser(@Body() dto: CreateUserDtoIn) {
    const createData = await this.usersService.createUser(dto);
    return new BaseDto('Create  User Successfully!', createData);
    // console.log(dto);
  }

  @Get('/')
  @ApiResponse({
    type: CreateUserDtoIn,
  })
  @ApiOperation({
    summary: 'get all users',
    description: 'get all users from the database',
  })
  async findAll() {
    const getUsers = await this.usersService.getUsers();
    return new BaseDto('Get Users Successfully!', getUsers);
  }

  @Get(':id')
  @ApiResponse({ type: CreateUserDtoIn })
  @ApiOperation({
    summary: 'get one user by id',
    description: 'get one user by id from the database',
  })
  async findOne(@Param('id') id: string) {
    const findOne = await this.usersService.findOne(id);
    return findOne;
  }

  @Put(':id')
  @ApiResponse({
    type: UpdateUserDtoIn,
  })
  @ApiOperation({
    summary: 'update one user by id',
    description: 'update one user by id from the database',
  })
  async update(@Param('id') id: string, @Body() dto: UpdateUserDtoIn) {
    const update = await this.usersService.updateUser(id, dto);
    return new BaseDto('Update User Successfully!', update);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'delete one user by id',
    description: 'delete one user by id from the database',
  })
  async remove(@Param('id') id: string) {
    const remove = await this.usersService.deleteUser(id);
    return new BaseDto('Delete User Successfully!', remove);
  }
}
