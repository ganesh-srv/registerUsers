import { Controller, Get } from '@nestjs/common';

import {  UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getData() {
    return this.userService.getData();
  }

  @Get('/srv')
  getmine(){
return this.userService.getmine();
  }
}
