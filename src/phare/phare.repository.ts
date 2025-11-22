import { Injectable } from "@nestjs/common";
import { GenerateurRepository } from "../generateur/generateur.repository";

@Injectable()
export class PhareRepository {

    constructor(private readonly generateurRepository: GenerateurRepository) { }


    turnOn() {
        this.generateurRepository.generatePower();
        console.log("Phare allumé");
    }

}