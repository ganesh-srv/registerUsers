import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';
import * as bcrypt from 'bcrypt';

var jwt = require('jsonwebtoken');

@Injectable()
export class UsersService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }
  constructor(@InjectModel('Users') private readonly userModel: Model<Users>) { }
  // constructor(@InjectModel('Users') private readonly userModel: Model<Users>) {

  // }

  async createUser(firstName: string, lastName: string, username: string, password: string, SecurityQuestion: Object) {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = new this.userModel({
        firstName,
        lastName,
        username,
        password: hash,
        SecurityQuestion
      });
      const result = await newUser.save();
      return result.id as string;
    } catch (error) {
      return error;
    }

  }

  generateToken(dataObject, time) {
    console.log("generate token", jwt);

    const token = jwt.sign({
      data: dataObject
    }, 'MY_SECERET', {
      expiresIn: time
    });
    return token;
  }


  async checkUser(username: string, password: string) {
    const user = await this.userModel.findOne({ username }).exec();
    console.log("user--->", user);

    if (user) {
      const isMatched = await bcrypt.compare(password, user.password);
      if (isMatched) {
        const tempUser = {
          username: user.username
        }
        const token = this.generateToken(tempUser, 28800000)
        return { message: 'Login Successfully', isLogin: true, token }
      } else {
        return { message: 'Invalid credentials', isLogin: false }
      }
    } else {
      return { message: 'User does not exist', isLogin: false }
    }
  }


  async getAllUsers() {
    return await this.userModel.find();
  }

  getmine(): { message: string } {
    return { message: 'Welcome to mine!' };
  }
}
