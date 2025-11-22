import { Injectable } from "@nestjs/common";

Injectable()
export class moteurRepository {

    private status: string = "off";


    start() {
        this.status = "on";
        console.log("Moteur demarré");
    }

    getStatus() {
        return this.status;
    }
}