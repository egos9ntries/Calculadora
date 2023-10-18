let displayValue = "";
let memorya = "";
let 
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue
}

function numero(val) {
    displayValue += val;
    document.getElementById("display").value = displayValue
}
function punto(val) {
    displayValue += val;
    document.getElementById("display").value = displayValue

}
function sumar(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue
}
function resta(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue
}
function multiplicar(val) {
    displayValue += val;
    document.getElementById("display").value = displayValue
}
function dividir(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}
function resultado() {
    const historialDiv = document.getElementById("historial");
    const operacion = document.getElementById("display").value.trim();

    if (operacion !== '') {
        try {
            const resultado = eval(operacion);

            if (!isNaN(resultado)) {
                document.getElementById("display").value = resultado;
                const historialTexto = `${operacion} = ${resultado}`;
                const nuevaEntrada = document.createElement("div");
                nuevaEntrada.textContent = historialTexto;
                historialDiv.appendChild(nuevaEntrada);
                return resultado;
            } else {
                document.getElementById("display").value = "Error";
                return "Error";
            }
        } catch (error) {
            document.getElementById("display").value = "Error";
            return "Error";
        }
    }

    return null;
}



function historial() {
    const historialDiv = document.getElementById("historial");
    const nuevaEntrada = document.createElement("div");
    nuevaEntrada.textContent = displayValue;
    historialDiv.appendChild(nuevaEntrada);
}

function limpieza() {
    const historialDiv = document.getElementById("historial");
    historialDiv.innerHTML = '<button class="limpieza" onclick="limpieza()">Limpieza</button>';
}


