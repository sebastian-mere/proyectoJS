class Prospecto {
    constructor(nombre, edad, aporte, anios, provincia) {

        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.aporte = parseInt(aporte);
        this.anios = parseInt(anios);
        this.provincia = provincia.toLowerCase();
        this.meses = (this.anios * 12);
        this.edadRetiro = (this.edad + this.anios);
    }

    getProvincia(){
        return this.provincia;
    }

    getMeses(){
        return this.meses;
    }

    getEdadRetiro(){
        return this.edadRetiro;
    }
}