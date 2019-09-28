// modules
import { Module } from '@nestjs/common';
import { UsersModule } from './controllers/user/users.module';
import { MongooseModule } from '@nestjs/mongoose';

// controllers
import { AppController } from './app.controller';

// services
import { AppService } from './app.service';

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot('mongodb+srv://GenryhK:pdkrjvnieOP1@cluster0-3ukxl.mongodb.net/nestjs-demo?retryWrites=true&w=majority'),
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {
}
