let prospecto
let sellado
let fondo = 0;
let sumatoriaFondo = []
let aniosFondo = []
let nombreTitulo = document.getElementById("nombreTitulo");
let inversion = document.getElementById("inversion");
let capital = document.getElementById("capital");
let montoSellado = document.getElementById("sellado");

let simular = document.getElementById("simular");
let reiniciar = document.getElementById("reiniciar")
let simulacion = document.getElementById("simulacion");



function nuevoProspecto() {

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let provincia = document.getElementById("provincia").value;
    let anioNac = parseInt(document.getElementById("anioNac").value);
    let aporte = parseInt(document.getElementById("aporte").value);
    let anios = parseInt(document.getElementById("anios").value);

    prospecto = new Prospecto(nombre, email, anioNac, aporte, anios, provincia);

    localStorage.setItem("sim", JSON.stringify(prospecto))
}

function calcularFondos() {

    for (let i = 1; i <= prospecto.meses; i++) {

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

function calcularAnios() {

    for (let i = 11; i <= sumatoriaFondo.length; i = i + 12) {
        aniosFondo.push(sumatoriaFondo[i])
    }
}

function busquedaSellado() {

    let busqueda = selladoProvincia.find((e) => e.provincia === prospecto.provincia);

    sellado = busqueda.sellado + prospecto.aporte;

    return sellado;

}

function generarSimulacion() {

    calcularFondos();
    calcularAnios();
    busquedaSellado();

    datosDona.push(prospecto.aporte)
    datosDona.push(prospecto.sueldo)
    simulacion.classList.remove('d-none');
    DATA_COUNT = aniosFondo.length;

    dataCount();
    updateConfig(curva);
    updateConfigDona(dona);

    nombreTitulo.innerHTML = prospecto.nombre;
    inversion.innerHTML = "$ " + prospecto.aporte;
    capital.innerHTML = "$ " + fondo.toFixed(2);
    montoSellado.innerHTML = "$ " + sellado.toFixed(2);
}

function validacion() {

    return true;
}

simular.addEventListener("click", (e) => {

    if (validacion()) {

        nuevoProspecto();

        generarSimulacion();

        document.getElementById("simular").disabled = true;

    } else {

        alert("Ocurrió un error, vuelve a intentarlo");

    }

    e.preventDefault()
})


document.addEventListener('DOMContentLoaded', () => {

    if (localStorage.getItem('sim')) {
        prospecto = JSON.parse(localStorage.getItem('sim'))
        
        generarSimulacion();
        document.getElementById("simular").disabled = true;
    }
})

reiniciar.addEventListener("click", () => {

    fondo = 0;
    sumatoriaFondo = []
    aniosFondo = []
    DATA_COUNT = 0;
    datosDona = []
    rebootLabels();
    rebootData();
    rebootDona();
    simulacion.classList.add('d-none');
    localStorage.removeItem('sim')
    document.getElementById("simular").disabled = false;

})

