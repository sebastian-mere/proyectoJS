// Variables necesarias para el funcionamiento de la simulación
let anioCorriente = new Date();
let prospecto
let sellado
let fondo = 0;
let sumatoriaFondo = []
let aniosFondo = []

// Función para simplificar la escritura de getElementById

let id = (id) => document.getElementById(id);


let nombreTitulo = id("nombreTitulo");
let inversion = id("inversion");
let capital = id("capital");
let montoSellado = id("sellado");
let msgNombre = id("msgNombre")
let msgEmail = id("msgEmail")
let msgProvincia = id("msgProvincia")
let msgAnioNac = id("msgAnioNac")
let msgAporte = id("msgAporte")
let msgAnios = id("msgAnios")

let simular = id("simular");
let reiniciar = id("reiniciar")
let simulacion = id("simulacion");


// Generación del nuevo prospecto desde el formulario

function nuevoProspecto() {

    let nombre = id("nombre").value;
    let email = id("email").value;
    let provincia = id("provincia").value;
    let anioNac = parseInt(id("anioNac").value);
    let aporte = parseInt(id("aporte").value);
    let anios = parseInt(id("anios").value);

    prospecto = new Prospecto(nombre, email, anioNac, aporte, anios, provincia);

    localStorage.setItem("sim", JSON.stringify(prospecto))
}


// Calculo de interés compuesto

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


// Calculo de lo acumulado cada año para mostrar en el gráfico

function calcularAnios() {

    for (let i = 11; i <= sumatoriaFondo.length; i = i + 12) {
        aniosFondo.push(sumatoriaFondo[i])
    }
}


// Busqueda del valor de sellado en el array "selladoProvincia"

function busquedaSellado() {

    let busqueda = selladoProvincia.find((e) => e.provincia === prospecto.provincia);

    sellado = busqueda.sellado + prospecto.aporte;

    return sellado;

}


// Calculo de los elementos necesarios, generación de gráficos y mostrado de los valores en la sección "simulacion"

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


// *PENDIENTE* Validaciones del formulario 

function validacion() {

    msgNombre.innerHTML = ""
    msgEmail.innerHTML = ""
    msgProvincia.innerHTML = ""
    msgAnioNac.innerHTML = ""
    msgAporte.innerHTML = ""
    msgAnios.innerHTML = ""

    let validacionNombre = id("nombre").value;
    let validacionEmail = id("email").value;
    let validacionProvincia = id("provincia").value;
    let validacionAnioNac = parseInt(id("anioNac").value);
    let validacionAporte = parseInt(id("aporte").value);
    let validacionAnios = parseInt(id("anios").value);


    if (isNaN(validacionNombre)) {
        validacionNombre = true
    } else {
        msgNombre.innerHTML = "Debes ingresar un nombre"
    };

    if (/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/.test(validacionEmail)) {
        validacionEmail = true;
    } else {
        msgEmail.innerHTML = "Debes ingresar un email válido"
    }

    if (validacionProvincia) {
        validacionProvincia = true
    } else {
        msgProvincia.innerHTML = "Debes seleccionar una provincia"
    }

    if (!(/^\d{4}$/.test(validacionAnioNac))) {
        msgAnioNac.innerHTML = "Debes ingresar un año válido"
        
    } else if ((anioCorriente.getFullYear() - validacionAnioNac) < 18){
        msgAnioNac.innerHTML = "Debes ser mayor de edad"

    } else {
        validacionAnioNac = true;

    }
    
    if (validacionAporte > 0) {
        validacionAporte = true;
    } else {
        msgAporte.innerHTML = "Debes ingresar una cantidad mayor a 0, idealmente el aporte debería ser el 15% de tus ingresos"
    }

    if (validacionAnios > 0) {
        validacionAnios = true;
    } else {
        msgAnios.innerHTML = "Debes ingresar una cantidad mayor a 0, lo recomendable es aportar un mínimo de 10 años"
    }

    if (validacionNombre === validacionEmail === validacionProvincia === validacionAnioNac === validacionAporte === validacionAnios){
        return true;
    }
}



// Si hay un prospecto guardado en localStorage se genera la simulación

document.addEventListener('DOMContentLoaded', () => {

    if (localStorage.getItem('sim')) {
        prospecto = JSON.parse(localStorage.getItem('sim'))

        generarSimulacion();
        simular.disabled = true;
    }
})


// Botón "simular" : genera prospecto, genera simulación y luego desactiva el botón 

simular.addEventListener("click", (e) => {

    if (validacion()) {

        nuevoProspecto();

        generarSimulacion();

        simular.disabled = true;

    } else {

        Toastify({
            text: "Algo salió mal, revisa el formulario y vuelve a intentarlo",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            style: {
              background: "linear-gradient(to right, #B91372, #6B0F1A)",
            },
          }).showToast();

    }

})


// Botón "Reset" : reseteo de todas las variables, ocultado de la sección "simulacion", borrado de localStorage y habilitación del botón "simular"

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
    simular.disabled = false;

})

