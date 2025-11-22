import { PhareRepository } from "../phare/phare.repository";
import { AudioRepository } from "../audio/audio.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class VehiculeRepository {

    constructor(private readonly phareRepository: PhareRepository,
        private readonly audioRepository: AudioRepository
    ) { }

    operate() {
        this.phareRepository.turnOn();
        this.audioRepository.playMusic();
        console.log("vehicule en fonctinnement");
    }
}