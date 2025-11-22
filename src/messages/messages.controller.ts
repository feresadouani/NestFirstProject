import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { MessageDto } from './dto/MessageDto';
import { MessagesService } from './message.service';

@Controller('messages')
export class MessagesController {

  messagesService: MessagesService
  constructor() {
    this.messagesService = new MessagesService()
  }

  @Get()
  ListMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: MessageDto) {
    console.log(body["content"]);
    return this.messagesService.create(body.content)
  }
  @Get("/:id")
  async getMessage(@Param("id") id: string) {
    const message = await this.messagesService.findOne(id)
    if (!message) {
      throw new NotFoundException("Le message n'existe pas")
    }
    return message
  }
}
