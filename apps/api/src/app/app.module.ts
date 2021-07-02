import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb+srv://pennyuser:ilikepancakes@clusterexodus.ntnmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
