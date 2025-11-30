import { Body, Controller, Delete, Get, Header, Headers, Injectable, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ObjectId } from 'typeorm';

@Controller('users')
@Injectable()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post("/add")
    create(@Body() data) {
        return this.usersService.create(data.email, data.password);
    }
    @Get("/all")
    find() {
        return this.usersService.findAll();
    }
    @Get("/:id")
    findOne(@Param('id') id: ObjectId) {
        return this.usersService.findOnebyId(id);
    }

    @Put('activate')
    activate(@Body() data: { email: string; password: string }) {
        return this.usersService.activateAccount(data.email, data.password);
    }

    @Get('email/:email')
    findByEmail(@Param('email') email: string) {
        return this.usersService.findOnebyEmail(email);
    }
    @Get('active')
    findActive() {
        return this.usersService.findActive();
    }


    /* users = [
         {
             id: 1,
             username: 'Mohamed',
             email: 'mohamed@esprit.tn',
             status: 'active',
         },
         { id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
         { id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
         { id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
     ];
 
     @Get()
     getUsers() {
         return this.users;
     }
 
     @Get('status')
     getByStatus(@Query('status') status: string) {
         if (status) {
             return this.users.find((user) => user.status == status);
         }
         return this.users;
     }
 
     @Get('email')
     getByEmail(@Query('email') email: string) {
         return this.users.find((user) => user.email == email);
     }
 
     @Get('/:id')
     getUserById(@Param('id') id: number) {
         return this.users.find((user) => user.id == id);
     }
 
     @Post("/add")
     createUser(@Body() data, @Headers('authorization') authHeader: string) {
         console.log('Authorization', authHeader);
         const newUser = { id: Date.now(), ...data };
         this.users.push(newUser);
         return newUser;
     }
 
     @Patch('/:id')
     update(@Param('id') id: number, @Body() data) {
         const user = this.users.find(user => user.id == Number(id));
         if (user) {
             user.username = data.username
             user.email = data.email
             user.status = data.status
             return user;
         }
         return null;
     }*/

}
