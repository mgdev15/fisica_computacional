import { perguntasQueda } from "./perguntasQueda.js";

const calcBtn = document.getElementById("botaoCalcular");

function calcular(){

    const altura = Number(document.getElementById("alturaInput").value);
    const gravidade = Number(document.getElementById("gravidadeInput").value);

    if(!altura || !gravidade){
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


