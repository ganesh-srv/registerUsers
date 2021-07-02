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
    @Body('emailId') emailId: string,
  ) {
    console.log("got u");
    
    const generatedId = await this.userService.createUser(firstName, lastName, emailId);
    return { id: generatedId };
  }

  @Get('/srv')
  getmine() {
    return this.userService.getmine();
  }
}
