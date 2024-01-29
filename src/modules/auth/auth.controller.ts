import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChangePasswordDtoIn, DtoOutAuth, LoginDtoIn } from './dto/auth';
import { BaseDto } from 'src/common/dtos/base.dto';
import { IAuthRequest, JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
@ApiBearerAuth('bearer')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiResponse({ type: LoginDtoIn })
  @ApiOperation({
    summary: 'Login user',
    description: 'Login in for an user and requests from the frontend.',
  })
  async login(@Body() dto: LoginDtoIn) {
    const { token, user } = await this.authService.login(
      dto.username,
      dto.password,
    );

    const response: DtoOutAuth = {
      token,
      user,
    };

    return new BaseDto('Succesfully Login', response);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/change-password-request')
  @ApiResponse({ status: 201, type: DtoOutAuth })
  async changePasswordReq(@Req() req: IAuthRequest) {
    console.log('INI ISI REQ ',req)
    const changePassword = await this.authService.changePasswordRequest(req.user.userId);
    return new BaseDto('change password successful', changePassword);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/change-password')
  @ApiResponse({ status: 201, type: ChangePasswordDtoIn })
  async changePassword(
    @Body() dtoIn: ChangePasswordDtoIn,
    @Req() req: IAuthRequest,
  ) {
    const changePassword = await this.authService.changePassword(
      req.user.userId,
      dtoIn.newPassword
    );

    return new BaseDto('change password successful', changePassword);
  }
}
