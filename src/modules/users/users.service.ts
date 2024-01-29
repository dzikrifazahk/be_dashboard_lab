import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDtoIn, CreateUserDtoOut } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { PasswordHash } from 'src/security/password-hash';
import { Repository } from 'typeorm';
import { UpdateUserDtoIn } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    private password: PasswordHash,
  ) {}
  async createUser(dto: CreateUserDtoIn): Promise<CreateUserDtoOut> {
    const MINIMUM_USERNAME_LENGTH = 5;
    const MINIMUM_PASSWORD_LENGTH = 5;

    if (dto.username.length < MINIMUM_USERNAME_LENGTH) {
      throw new BadRequestException(
        `username should be at least ${MINIMUM_USERNAME_LENGTH} character long`,
      );
    }

    if (dto.password.length < MINIMUM_PASSWORD_LENGTH) {
      throw new BadRequestException(
        `password should be at least ${MINIMUM_PASSWORD_LENGTH} character long`,
      );
    }

    const findUsername = await this.userRepository.findOneBy({
      username: dto.username,
    });

    if (findUsername != null) {
      throw new BadRequestException('username already registered');
    }

    const encryptedPassword = await this.password.hash(dto.password);

    const newUser = this.userRepository.create({
      username: dto.username,
      password: encryptedPassword,
      fullname: dto.fullname,
      aliasName: dto.aliasName,
      role: dto.role,
      address: dto.address,
    });

    await this.userRepository.save(newUser);

    return { userId: newUser.id };
  }

  async findOne(id: string): Promise<UsersEntity | null> {
    const findUser = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!findUser) {
      throw new BadRequestException('user not found');
    }

    return findUser;
  }

  async getUsers() {
    return this.userRepository
      .createQueryBuilder('users')
      .orderBy('LOWER(users.fullName)', 'ASC')
      .getMany();
  }

  async getByUsername(username: string) {
    if (!username) {
      throw new BadRequestException('username not found');
    }

    const foundUser = await this.userRepository.findOneBy({
      username,
    });

    if (foundUser === null) {
      throw new BadRequestException("your account doesn't exist");
    }

    return foundUser;
  }

  async deleteUser(id: string) {
    const findUser = await this.userRepository.findOneBy({
      id: id,
    });

    if (!findUser) {
      return 'Error User not found';
    }

    await this.userRepository.delete(id);

    return findUser;
  }

  async findOneById(id: string) {
    return this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async updateUser(id: string, dto: UpdateUserDtoIn) {
    let message: string;

    const find = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!find) {
      throw new Error('Error User not found');
    }

    const foundUser = await this.userRepository.findOneBy({
      id: find.id,
    });

    if (dto.username) {
      foundUser.username = dto.username;
    }

    if (dto.fullname) {
      foundUser.fullname = dto.fullname;
    }

    if (dto.aliasName) {
      foundUser.aliasName = dto.aliasName;
    }

    if (dto.role) {
      foundUser.role = dto.role;
    }

    if (dto.aliasName) {
      foundUser.aliasName = dto.aliasName;
    }

    if (dto.address) {
      foundUser.address = dto.address;
    }

    // console.log('newUpdatedUser : ', foundUser);
    const newUpdatedUser = await this.userRepository.save(foundUser);

    return { message: message, data: newUpdatedUser };
  }
}
