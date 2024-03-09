import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}
