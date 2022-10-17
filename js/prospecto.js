class Prospecto {
    constructor(nombre, edad, aporte, anios, provincia) {

        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.aporte = parseInt(aporte);
        this.anios = parseInt(anios);
        this.provincia = provincia.toLowerCase();
    }

    getProvincia(){
        return this.provincia;
    }

    meses(){
        return (this.anios * 12);
    }

    edadRetiro(){
        return (this.edad + this.anios);
    }
}