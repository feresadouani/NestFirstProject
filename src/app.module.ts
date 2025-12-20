import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { MoteurModule } from './moteur/moteur.module';
import { AudioModule } from './audio/audio.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { GenerateurModule } from './generateur/generateur.module';
import { PhareModule } from './phare/phare.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './messages/message.entity';
import { User } from './users/user.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Global()
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb', // Déclare que c'est MongoDB
      host: 'localhost', // L'adresse de ton serveur MongoDB
      port: 27017, // Le port de MongoDB
      database: '4TWIN', // Nom de la base de données
      entities: [Message, User], // Liste des entités
      synchronize: true,
    }),
    UsersModule, MessagesModule, MoteurModule, AudioModule, VehiculeModule, GenerateurModule, PhareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
