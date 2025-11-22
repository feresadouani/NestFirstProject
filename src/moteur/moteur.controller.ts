import { Controller, Get } from '@nestjs/common';
import { MoteurService } from './moteur.service';

@Controller('moteur')
export class MoteurController {

    constructor(private readonly moeturService: MoteurService) { }

    @Get('/start')
    startMoteur() {
        this.moeturService.startMoteur();
        return "Moteur Demarrer";
    }

    @Get('/status')
    statusMoteur() {
        this.moeturService.getStatus();
    }
}
