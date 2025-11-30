import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./message.entity";
import { Repository } from "typeorm";


@Injectable()
export class MessagesService {
    /* messagesRepository: MessagesRepository
     constructor() {
         this.messagesRepository = new MessagesRepository()
     }
     findOne(id: string) {
         return this.messagesRepository.findOne(id)
     }
     findAll() {
         return this.messagesRepository.findAll()
     }
     create(content: string) {
         return this.messagesRepository.create(content)
     }*/
    constructor(@InjectRepository(Message) private messageRepository: Repository<Message>) { }

    async create(content: string, status: string) {
        try {
            const message = this.messageRepository.create({ content, status } as any);
            await this.messageRepository.save(message);
            return message;
        } catch (error) {
            throw new Error("Erreur lors de la création du message: " + (error instanceof Error ? error.message : String(error)));
        }
    }


    findAll() {
        this.messageRepository.find();
    }
}