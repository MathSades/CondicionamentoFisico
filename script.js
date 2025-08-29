function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (!peso || !altura) {
        resultado.textContent = "Por favor, preencha todos os campos!";
        resultado.style.color = "red";
        return;
    }

    let imc = peso / (altura * altura);
    let mensagem = "";

    if (imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (imc < 24.9) {
        mensagem = "Peso ideal";
    } else if (imc < 29.9) {
        mensagem = "Sobrepeso";
    } else {
        mensagem = "Obesidade";
    }

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${mensagem})`;
    resultado.style.color = "black";
}
