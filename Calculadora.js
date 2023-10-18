let displayValue = "";
let memorya = "";
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
    displayValue = document.getElementById("display").value;
    memorya=displayValue
    document.getElementById("display").value = eval(displayValue);
    if (displayValue !== "") {
        memorya = displayValue
        document.getElementById("display").value = eval(displayValue);
    }
}
function historial(){
    document.getElementById("display").value = memorya;
    memorya += document.getElementById("display").value
}
