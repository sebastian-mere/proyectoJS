// Clase para generación de los posibles prospectos

class Prospecto {
    constructor(nombre, email, anioNac, aporte, anios, provincia) {

        this.nombre = nombre;
        this.email = email;
        this.anioNac = parseInt(anioNac);
        this.aporte = parseInt(aporte);
        this.anios = parseInt(anios);
        this.provincia = provincia.toLowerCase();

        
        this.edad = (anioCorriente.getFullYear() - this.anioNac);
        this.meses = (this.anios * 12);
        this.edadRetiro = (this.edad + this.anios);
        this.sueldo = ((100 * this.aporte) / 15)
    }

}