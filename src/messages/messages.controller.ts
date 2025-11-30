import { Body, Controller, Get, Injectable, NotFoundException, Param, Post } from '@nestjs/common';
import { MessageDto } from './dto/MessageDto';
import { MessagesService } from './message.service';
@Injectable()
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) { }

  @Post('/add')
  CreateMessage(@Body() Body: MessageDto) {
    return this.messagesService.create(Body.content, Body.status)
  }

  @Get('/all')
  getAllMessages() {
    return this.messagesService.findAll();
  }
}
