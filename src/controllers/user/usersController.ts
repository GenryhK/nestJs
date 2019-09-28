import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
// Models
import { User } from './user.model';
// Services
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Post()
    async addUser(
        @Body() completeBody: {
            userName: string,
            userShortName: string,
            phone: string,
        },
    ) {
        const {userName, userShortName, phone} = completeBody;

        return await this.usersService.addUser(userName, userShortName, phone);
    }

    @Get(':id')
    async getUser(@Param('id')id: string) {
        const user = await this.usersService.getUser(id);

        return user;
    }

    @Get()
    async getAllUsers() {
        const users = await this.usersService.getAllUsers();

        return users;
    }

    @Patch(':id')
    async updateUser(
        @Param('id')id: string,
        @Body() completeBody: {
            userName: string,
            userShortName: string,
            phone: string,
        },
    ): Promise<User> {
        const user = await this.usersService.updateUser(id, completeBody);

        return user;
    }

    @Delete(':id')
    async deleteUser(@Param('id')id: string): Promise<string> {
        const result = await this.usersService.deleteUser(id);

        return result;
    }

}
