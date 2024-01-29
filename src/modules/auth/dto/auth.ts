import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDtoIn {
  @ApiProperty({
    type: String,
    required: true,
    example: 'dzikri12',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'qwe2rtyu',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class ChangePasswordDtoIn {
  @ApiProperty()
  newPassword: string;
}

export class UserObject {
  id: string;
  role: string;
  fullname: string;
}

export class DtoOutAuth {
  @ApiProperty({
    type: String,
    required: true,
    example: 'JWT',
  })
  token: string;

  @ApiProperty({
    type: UserObject,
    required: true,
  })
  user: UserObject;
}
