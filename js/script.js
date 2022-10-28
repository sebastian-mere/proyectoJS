let prospecto
let sellado
let fondo = 0;
let sumatoriaFondo = []
let aniosFondo = []

let simulacion = document.getElementById("simulacion");

function nuevoProspecto() {

    let nombre = "Seba" //prompt("Ingresa tu nombre");
    let email = "sm@gmail.com" //parseInt(prompt("Ingresa tu email"));
    let anioNac = 2000//parseInt(prompt("año de nacimiento"));
    let aporte = 200//parseInt(prompt("¿Cuánto podrías destinar a tu retiro por mes?"));
    let anios = 20//parseInt(prompt("¿En cuántos años querrías retirarte?"));
    let provincia = "buenos aires"//prompt("Por último, ingresa la provincia de residencia").toLowerCase();
    

    prospecto = new Prospecto (nombre, email, anioNac, aporte, anios, provincia);

}

function calcularFondos() {

    for (let i = 1; i <= prospecto.getMeses(); i++) {

        if (i <= 1) {
            fondo = prospecto.aporte
            console.log(fondo)
            sumatoriaFondo.push(fondo)
        } else {
            fondo = (fondo + prospecto.aporte) * 1.008
            console.log(fondo)
            sumatoriaFondo.push(fondo)
        }
    }
}

function calcularAnios(){

    for (let i = 11; i <= sumatoriaFondo.length; i=i+12){
        aniosFondo.push(sumatoriaFondo[i])
    }
}

function busquedaSellado() {

    let busqueda = selladoProvincia.find((e) => e.provincia === prospecto.getProvincia());

    sellado = busqueda.sellado + prospecto.aporte;

    return sellado;

}

function mensaje() {
    alert(prospecto.nombre + " cuando tengas " + prospecto.getEdadRetiro() + " podrás retirarte con " + fondo.toFixed(2) +
        "\nRecuerda que el débito de la primer cuota será de " + sellado.toFixed(2) + " debido a los costos de sellado de tu provincia");
}



nuevoProspecto();


if (prospecto.edad < 18) {

    alert(nombre + " necesitas ser mayor de edad para poder continuar");

} else {

    calcularFondos();

    calcularAnios()

    busquedaSellado();

    mensaje();

}