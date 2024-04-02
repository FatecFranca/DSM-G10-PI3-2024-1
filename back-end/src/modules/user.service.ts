import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/domain/dtos/UpdateUser.dto';
import { UserDto } from 'src/domain/dtos/User.dto';
import { User } from 'src/domain/entities/User.entity';
import { DatabaseService } from 'src/services/Database.service';

@Injectable()
export class UserService {
  constructor(
    private readonly databaseService: DatabaseService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}
  async fetchAll(): Promise<UserDto[]> {
    const result = await this.databaseService.user.findMany({
      where: { deletedAt: undefined },
    });

    return this.mapper.mapArray(result, User, UserDto);
  }

  async getById(id: string): Promise<UserDto> {
    const result = await this.databaseService.user.findUnique({
      where: { id, deletedAt: undefined },
    });
    return this.mapper.map(result, User, UserDto);
  }

  async create(user: CreateUserDto) {
    return this.databaseService.user.create({ data: user });
  }

  async update(userId: string, user: UpdateUserDto) {
    return this.databaseService.user.update({
      data: user,
      where: { id: userId },
    });
  }

  async delete(userId: string) {
    return this.databaseService.user.update({
      data: { deletedAt: new Date() },
      where: { id: userId },
    });
  }
}
