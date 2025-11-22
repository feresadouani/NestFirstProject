import { Controller, Get } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';

@Controller('vehicule')
export class VehiculeController {

    constructor(private readonly vehiculeService: VehiculeService) { }

    @Get("/operate")
    operateVEhicule() {
        this.vehiculeService.operate();
        return 'Vehicule en finctionnement'
    }
}
