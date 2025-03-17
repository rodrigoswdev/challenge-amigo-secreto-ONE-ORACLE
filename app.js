// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const vectorAmigos = [];
const capturarAmigo = document.getElementById("amigo");
const listarAmigos = document.getElementById("listaAmigos");
const resultadoAmigo = document.getElementById("resultado");

function agregarAmigo() {
    if (!capturarAmigo.value) {
        alert("Por favor, ingrese un nombre válido.");
    } else {
        vectorAmigos.push(capturarAmigo.value);
        //console.log(vectorAmigos);
        listarAmigos.innerHTML = listarAmigos.innerHTML + `<li>${capturarAmigo.value}</li>`;
        limpiarCaja();
    }
}

function sortearAmigo() {
    const sorteo = Math.floor(Math.random() * vectorAmigos.length);
    const amigoSecreto = vectorAmigos[sorteo];
    resultadoAmigo.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSecreto}</li>`
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}