let prospecto
let sellado
let fondo = 0;

function nuevoProspecto() {

    let nombre = prompt("Ingresa tu nombre");
    let edad = parseInt(prompt("Ingresa tu edad"));
    let aporte = parseInt(prompt("¿Cuánto podrías destinar a tu retiro por mes?"));
    let anios = parseInt(prompt("¿En cuántos años querrías retirarte?"));
    let provincia = prompt("Por último, ingresa la provincia de residencia").toLowerCase();

    prospecto = new Prospecto (nombre, edad, aporte, anios, provincia);

}

function calcularFondos() {

    for (let i = 1; i <= prospecto.getMeses(); i++) {

        if (i <= 1) {
            fondo = prospecto.aporte
            console.log(fondo)
        } else {
            fondo = (fondo + prospecto.aporte) * 1.008
            console.log(fondo)
        }
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

    busquedaSellado();

    mensaje();

}