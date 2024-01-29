import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { DtoOutAuth } from './dto/auth';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../users/entities/users.entity';
import { Repository } from 'typeorm';
import { PasswordHash } from 'src/security/password-hash';

export interface TokenPayload {
  userId: string;
  username: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private passwordHash: PasswordHash,
  ) {}

  async login(username: string, password: string): Promise<DtoOutAuth> {
    const user = await this.usersRepository.findOne({
      where: { username: username },
    });
    console.log('INI USER ', user);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    const payload: TokenPayload = {
      userId: user.id,
      username: user.username,
    };

    const resultUser = {
      token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
      user: {
        id: user.id,
        role: user.role,
        fullname: user.fullname,
      },
    };
    return resultUser;
  }

  async changePasswordRequest(id: string) {
    const user = await this.usersService.findOne(id);

    if (user == null) {
      throw new BadRequestException('user not found');
    }
    if(user.needChangePassword){
      throw new BadRequestException('already request change password');
    }

    user.needChangePassword = true;

    await this.usersRepository.save(user);
    return user.username;
  }

  async changePassword(userId: string, newPassword: string) {
    const user = await this.usersRepository.findOneBy({ id: userId });

    if (user == null) {
      throw new BadRequestException('user not found');
    }

    if (!user.needChangePassword) {
      throw new BadRequestException('no need to change password');
    }

    user.password = await this.passwordHash.hash(newPassword);
    user.needChangePassword = false;

    await this.usersRepository.save(user);
    return { username: user.username};
  }
}
