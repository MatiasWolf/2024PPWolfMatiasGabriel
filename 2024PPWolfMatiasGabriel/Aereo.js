import { Vehiculo } from "./Vehiculo.js";

export class Aereo extends Vehiculo {
    constructor(id, modelo, anoFab, velMax, altMax, autonomia) {
        super(id, modelo, anoFab, velMax)

        this.altMax = altMax;
        this.autonomia = autonomia;
    }

    toString() {
        return `${super.toString()}, Altura máxima: ${this.altMax}, Autonomía: ${this.autonomia}`;
    }
}