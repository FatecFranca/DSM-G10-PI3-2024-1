import { AutoMap } from '@automapper/classes';

export class UpdateUserDto {
  @AutoMap()
  userName: string;

  @AutoMap()
  name: string;

  @AutoMap()
  password: string;
}
