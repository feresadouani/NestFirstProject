import { Injectable } from '@nestjs/common';
import { VehiculeRepository } from './vehicule.repository';

@Injectable()
export class VehiculeService {

    constructor(private readonly vehiculeRepository: VehiculeRepository) { }

    operate() {
        this.vehiculeRepository.operate();
    }
}
