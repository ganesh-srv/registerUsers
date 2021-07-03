import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  getData() {
    console.log("got u");
    return this.userService.getData();
  }

  @Post('/create')
  async createUsers(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('securityQuestion') SecurityQuestion: Object,
    @Body('userName') username: string,

    @Body('password') password: string,

  ) {
    try {

      const generatedId = await this.userService.createUser(firstName, lastName, username, password, SecurityQuestion);
      if (generatedId) {
        return { isSuccess: true };
      }
    } catch (error) {
      return { isSuccess: false, error };
    }

  }


  @Post('/check')
  async checkUser(
    @Body('username') username: string,
    @Body('password') password: string,

  ) {

    try {
      const response = await this.userService.checkUser(username, password);
      return response;
    } catch (error) {
      console.log("error")
      throw error;
    }

  }


  @Get('/getAll')
  getAll() {
    return this.userService.getAllUsers();
  }
}
