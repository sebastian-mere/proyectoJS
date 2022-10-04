let nombre = prompt("Ingresa tu nombre");
let edad = parseInt(prompt("Ingresa tu edad"));
let aporte = parseInt(prompt("¿Cuánto podrías destinar a tu retiro por mes?"));
let anios = parseInt(prompt("¿En cuántos años querrías retirarte?"));
let provincia = prompt("Por último, ingresa la provincia de residencia").toLowerCase();

let sellado = 0
let edadRetiro = edad + anios;
let meses = anios * 12;
let fondo = 0;

function calcularFondos() {

    for (let i = 1; i <= meses; i++) {

        if (i <= 1) {
            fondo = aporte
            console.log(fondo)
        } else {
            fondo = (fondo + aporte) * 1.008
            console.log(fondo)
        }
    }
}

function costoSellado() {

    switch (provincia) {
        case "entre rios": sellado = aporte * 1.5;
            break;

        case "buenos aires": sellado = aporte * 1.1;
            break;

        case "santa fe": sellado = aporte * 2.5;
            break;

        default: sellado = aporte * 1.2;
    }

}

if (edad < 18) {

    alert(nombre + " necesitas ser mayor de edad para poder continuar");

} else {

    calcularFondos();

    costoSellado();

    alert(nombre + " cuando tengas " + edadRetiro + " podrás retirarte con " + fondo.toFixed(2) +
        "\nRecuerda que el débito de la primer cuota será de " + sellado.toFixed(2) + " debido a los costos de sellado de tu provincia");

}