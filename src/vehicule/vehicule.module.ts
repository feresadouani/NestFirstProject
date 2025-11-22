import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeRepository } from './vehicule.repository';
import { VehiculeController } from './vehicule.controller';
import { AudioModule } from 'src/audio/audio.module';
import { PhareModule } from 'src/phare/phare.module';

@Module({
  imports: [PhareModule, AudioModule],
  providers: [VehiculeService, VehiculeRepository],
  exports: [VehiculeRepository],
  controllers: [VehiculeController]
})
export class VehiculeModule { }
