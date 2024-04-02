import { AutoMap } from '@automapper/classes';

export class User {
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  userName: string;

  @AutoMap()
  email: string;

  @AutoMap()
  password: string;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;

  @AutoMap()
  deletedAt: Date;
}
