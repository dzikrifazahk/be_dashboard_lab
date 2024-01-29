import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { PasswordHash } from 'src/security/password-hash';

@Module({
  imports: [
    JwtModule,
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, PasswordHash]
})
export class AuthModule {}
