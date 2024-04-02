import { AutoMap } from '@automapper/classes';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @AutoMap()
  @IsString()
  userName: string;

  @AutoMap()
  @IsEmail()
  email: string;

  @AutoMap()
  @IsStrongPassword()
  password: string;

  @AutoMap()
  @IsString()
  name: string;
}
