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

@Global()
@Module({
  imports: [UsersModule, MessagesModule, MoteurModule, AudioModule, VehiculeModule, GenerateurModule, PhareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
