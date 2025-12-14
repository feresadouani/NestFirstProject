import { Controller, Get, Injectable, Query, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { IntercepteurFiltre } from "src/interceptor/intercepteur.interceptor";


@UseInterceptors(IntercepteurFiltre)
@Controller('admin')
@Injectable()
export class AdminController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getAllUsers(@Query('role') role: string) {
    return this.usersService.findAll();
  }


}