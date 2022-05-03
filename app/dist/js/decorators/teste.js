var titulo = document.querySelector(".titulo");
if (titulo)
    titulo.textContent = "aparecida nutricionista";
var pacientes = document.querySelectorAll(".pacientes");
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    var pesoevalido = true;
    var alturaevalido = true;
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    var tdimc = paciente.querySelector(".info-imc");
    if (peso <= 0 || peso >= 1000) {
        console.log("peso invalido!");
        pesoevalido = false;
        tdimc.textContent = "peso invalido!";
    }
    if (altura <= 0 || altura >= 3.0) {
        console.log("altura invalida!");
        alturaevalido = false;
        tdimc.textContent = "altura invalido!";
    }
    if (pesoevalido && alturaevalido) {
        var imc = peso / (altura * altura);
        tdimc.textContent = imc;
    }
}
