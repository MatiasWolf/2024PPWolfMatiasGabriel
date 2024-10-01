export class Vehiculo {
    constructor(id, modelo, anoFab, velMax) {
        this.id = id;
        this.modelo = modelo;
        this.anoFab = anoFab;
        this.velMax = velMax;
    }

    toString() {
        return `Vehiculo: Modelo: ${this.modelo}, Año: ${this.anoFab}, Velocidad Máx.: ${this.velMax} km/h`;
    }
}