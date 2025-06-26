import { perguntasQueda } from "./perguntasQueda.js";

let alturaPlaceholder = document.getElementById("alturaInput");
const unidadeMedida = document.getElementById("unidadeMedida");

unidadeMedida.addEventListener("change", () => {

    if(unidadeMedida.value === "centimetros"){
        alturaPlaceholder.placeholder = "Altura (cm)";
    }
    else{
        alturaPlaceholder.placeholder = "Altura (m)";
    }

});

const calcBtn = document.getElementById("botaoCalcular");

function calcular(){

    let altura = Number(document.getElementById("alturaInput").value);
    const unidade = unidadeMedida.value;
    const gravidade = Number(document.getElementById("gravidadeInput").value);

    if(unidade === "centimetros"){
        altura = altura / 100;
    }

    if(altura <= 0 || gravidade <= 0){
        return 0;
    }

    const tempoDisplay = document.getElementById("tempoDeQueda");

    const tempo = Math.sqrt(2 * altura / gravidade); //TEMPO DE QUEDA
    tempoDisplay.textContent = `${tempo.toFixed(2)}s`;

};

calcBtn.addEventListener("click", calcular);

document.addEventListener("keydown", event => {

    const key = event.key.toLowerCase();

    if(key === "enter"){
        calcular();
    }

});

let perguntaIdx = 0;
const pgElement = document.getElementById("perguntaEl");
const proxBtn = document.getElementById("proxBtn");

proxBtn.addEventListener("click", () => {

    perguntaIdx++;

    if(perguntasQueda.length > perguntaIdx){
        pgElement.textContent = perguntasQueda[perguntaIdx].enunciado;
    }
    else{
        perguntaIdx = 0;
        pgElement.textContent = perguntasQueda[perguntaIdx].enunciado;
    }

});