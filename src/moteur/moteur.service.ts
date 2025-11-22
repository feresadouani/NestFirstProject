import { Injectable } from '@nestjs/common';
import { moteurRepository } from './moteur.repository';

@Injectable()
export class MoteurService {
    constructor(private readonly MoteurRepository: moteurRepository) { }

    startMoteur() {
        this.MoteurRepository.start();
    }

    getStatus() {
        this.MoteurRepository.getStatus();
    }
}
