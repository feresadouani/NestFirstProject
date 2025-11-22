import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioRepository } from './audio.repository';
import { AudioController } from './audio.controller';
import { GenerateurModule } from 'src/generateur/generateur.module';

@Module({
  imports: [GenerateurModule],
  providers: [AudioService, AudioRepository],
  exports: [AudioRepository],
  controllers: [AudioController]
})
export class AudioModule { }
