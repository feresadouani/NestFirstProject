import { Module } from '@nestjs/common';
import { GenerateurService } from './generateur.service';
import { GenerateurRepository } from './generateur.repository';
import { GenerateurController } from './generateur.controller';
import { MoteurModule } from 'src/moteur/moteur.module';

@Module({
  imports: [MoteurModule],
  providers: [GenerateurService, GenerateurRepository],
  exports: [GenerateurRepository],
  controllers: [GenerateurController]
})
export class GenerateurModule { }
