class Prospecto {
    constructor(nombre, email, anioNac, aporte, anios, provincia) {

        this.nombre = nombre;
        this.email = email;
        this.anioNac = parseInt(anioNac);
        this.aporte = parseInt(aporte);
        this.anios = parseInt(anios);
        this.provincia = provincia.toLowerCase();

        this.anioCorriente = new Date();
        this.edad = (this.anioCorriente.getFullYear() - this.anioNac);
        this.meses = (this.anios * 12);
        this.edadRetiro = (this.edad + this.anios);
        this.sueldo = ((100 * this.aporte) / 15)
    }

    getProvincia() {
        return this.provincia;
    }

    getMeses() {
        return this.meses;
    }

    getEdadRetiro() {
        return this.edadRetiro;
    }

    getSueldo() {
        return this.sueldo;
    }
}