import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: any): Promise<boolean> {
    const isExist = await this.userModel.exists({ username: user.username });
    if (!isExist) {
      await this.userModel.create(user);
      return true;
    } else {
      return false;
    }
  }

  async login(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username, password }).exec();
    if (user) {
      return user;
    } else {
      return 'Wrong username or password!';
    }
  }

  async findOne(username: string): Promise<any> {
    const user = await this.userModel.findOne({ username }).exec();
    if (user) {
      return user;
    } else {
      return 'Not Found';
    }
  }
}
