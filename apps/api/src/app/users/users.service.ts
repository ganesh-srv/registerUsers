import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getmine(): { message: string } {
    return { message: 'Welcome to mine!' };
  }
}
