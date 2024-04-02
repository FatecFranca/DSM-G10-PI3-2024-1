import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseService } from 'src/services/Database.service';
import { UserProfile } from 'src/domain/profiles/User.profile';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService, DatabaseService, UserProfile],
})
export class UserModule {}
