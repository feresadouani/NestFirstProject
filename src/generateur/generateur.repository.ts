import { Injectable } from "@nestjs/common";
import { moteurRepository } from "src/moteur/moteur.repository";

@Injectable()
export class GenerateurRepository {

    constructor(private readonly moteurRepository: moteurRepository) { }

    generatePower() {
        this.moteurRepository.start();
        console.log("Générateur en fondtionnement...");
    }
}