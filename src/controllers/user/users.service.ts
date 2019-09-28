import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// Models
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel('Users') private usersModel: Model<User>) {

    }

    async addUser(userName: string, userShortName: string, phone: string) {
        const newUser = new this.usersModel({
            userName,
            userShortName,
            phone,
        });
        const result = await newUser.save();
        return result;
    }

    async getAllUsers() {
        const users = await this.usersModel.find();

        return users.map((user) => ({
            id: user.id,
            userName: user.userName,
            userShortName: user.userShortName,
            phone: user.phone,
        }));
    }

    async getUser(id: string) {
        const user = await this.findUser(id);
        return {
            id: user.id,
            userName: user.userName,
            userShortName: user.userShortName,
            phone: user.phone,
        };
    }

    async updateUser(
        id: string,
        body: { userName: string, userShortName: string, phone: string },
    ): Promise<User> {
        const updatedUser = await this.findUser(id);
        const {userName, userShortName, phone} = body;
        if (userName) {
            updatedUser.userName = userName;
        }
        if (userName) {
            updatedUser.userShortName = userShortName;
        }
        if (userName) {
            updatedUser.phone = phone;
        }
        updatedUser.save();

        return updatedUser;
    }

    async deleteUser(userId: string): Promise<string> {
        const result = await this.usersModel.deleteOne({_id: userId});
        if (result.n === 0) {
            throw new NotFoundException('user not found');
        }
        return 'deleted';
    }

    private async findUser(id): Promise<User> {
        let user;
        try {
            user = await this.usersModel.findById(id);
        } catch (e) {
            throw new NotFoundException('user not found');
        }
        if (!user) {
            throw new NotFoundException('user not found');
        }

        return user;
    }
}
