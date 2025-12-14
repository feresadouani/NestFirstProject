import { Controller, Get, Injectable, Query, UseInterceptors } from '@nestjs/common';
import { IntercepteurFiltre } from 'src/interceptor/intercepteur.interceptor';
import { UsersService } from './users.service';

@UseInterceptors(IntercepteurFiltre)
@Controller('client')
@Injectable()
export class ClientController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async FindAll(@Query('role') role: string) {
        return this.usersService.findAll();
    }
}
