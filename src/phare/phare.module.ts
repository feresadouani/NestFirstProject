import { Module } from '@nestjs/common';
import { PhareService } from './phare.service';
import { PhareRepository } from './phare.repository';
import { PhareController } from './phare.controller';
import { GenerateurModule } from 'src/generateur/generateur.module';

@Module({
  imports: [GenerateurModule],
  providers: [PhareService,PhareRepository],
  exports: [PhareRepository],
  controllers: [PhareController]
})
export class PhareModule {}
