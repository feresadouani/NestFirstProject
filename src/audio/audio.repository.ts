import { Injectable } from "@nestjs/common";
import { GenerateurRepository } from "src/generateur/generateur.repository";

@Injectable()
export class AudioRepository {

    constructor(private readonly generateurRepository: GenerateurRepository) { }


    playMusic() {
        this.generateurRepository.generatePower();
        console.log("Musique en lecture...");
    }

}