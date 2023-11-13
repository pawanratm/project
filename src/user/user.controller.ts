import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/user.dto';
import { User } from './user.schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  registerUser(@Body() user): Promise<boolean> {
    return this.userService.create(user);
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<any> {
    console.log('login', username, password);
    return this.userService.login(username, password);
  }

  @Get(':username')
  getProfile(@Param('username') username: string): Promise<any> {
    console.log('username', username);
    return this.userService.findOne(username);
  }
}
