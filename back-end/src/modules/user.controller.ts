import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/domain/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/domain/dtos/UpdateUser.dto';
import { UserDto } from 'src/domain/dtos/User.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async fetchAll(): Promise<UserDto[]> {
    return this.userService.fetchAll();
  }

  @Get('/:id')
  async getById(@Param('id') userId: string): Promise<UserDto> {
    return this.userService.getById(userId);
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    await this.userService.create(user);
    return;
  }

  @Put('/:id')
  async update(@Body() user: UpdateUserDto, @Param('id') userId: string) {
    return await this.userService.update(userId, user);
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') userId: string) {
    await this.userService.delete(userId);
    return;
  }
}
