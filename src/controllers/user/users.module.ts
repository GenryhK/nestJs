// modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// controllers
import { UsersController } from './usersController';
// services
import { UsersService } from './users.service';
// Models
import { UserSchema } from './user.model';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Users', schema: UserSchema}]),
    ],

    controllers: [
        UsersController,
    ],

    providers: [
        UsersService,
    ],
})
export class UsersModule {
}
