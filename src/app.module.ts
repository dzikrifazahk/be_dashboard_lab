import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { dataSourceOpt } from 'database/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './modules/patients/patients.module';
import { RegistrationsModule } from './modules/registrations/registrations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOpt,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    PatientsModule,
    RegistrationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
