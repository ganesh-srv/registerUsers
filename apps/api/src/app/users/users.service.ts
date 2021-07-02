import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';
@Injectable()
export class UsersService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }
constructor(@InjectModel('Users') private readonly userModel:Model<Users>){}
  // constructor(@InjectModel('Users') private readonly userModel: Model<Users>) {

  // }

  async createUser(firstName: string, lastName: string, emailId: string) {
    const newUser = new this.userModel({
      firstName,
      lastName,
      emailId
    });
    const result = await newUser.save();
    return result.id as string;
  }
  getmine(): { message: string } {
    return { message: 'Welcome to mine!' };
  }
}
