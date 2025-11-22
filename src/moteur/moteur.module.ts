import { Module } from '@nestjs/common';
import { MoteurService } from './moteur.service';
import { moteurRepository } from './moteur.repository';
import { MoteurController } from './moteur.controller';

@Module({
  imports : [MoteurModule],
  providers: [MoteurService,moteurRepository],
  exports: [moteurRepository],
  controllers: [MoteurController]
})
export class MoteurModule {}
