import { perguntasLancamentoHz } from "./perguntasLancamentoHz.js";

const calcBtn = document.getElementById("botaoCalcular");

calcBtn.addEventListener("click", () => {

    const altura = Number(document.getElementById("alturaInput").value);
    const gravidade = Number(document.getElementById("gravidadeInput").value);
    const veloHzInput = Number(document.getElementById("vxInput").value);

    const tempoDisplay = document.getElementById("tempoDeQueda");
    const alcanceHzDisplay = document.getElementById("alcanceHz");
    const alcanceVtcDisplay = document.getElementById("alcanceVtc");
    const veloFinalDisplay = document.getElementById("veloFinal");
    const veloHzDisplay = document.getElementById("veloHz");
    const veloVtcDisplay = document.getElementById("veloVtc");

    const tempo = Math.sqrt(2 * altura / gravidade); //TEMPO DE QUEDA
    tempoDisplay.textContent = `${tempo.toFixed(2)}s`;

    const alcanceHz = veloHzInput * tempo; //ALCANCE HORIZONTAL
    alcanceHzDisplay.textContent = `${alcanceHz.toFixed(2)}m`;

    const alcanceVtc = gravidade * Math.pow(tempo, 2) / 2; //ALCANCE VERTICAL
    alcanceVtcDisplay.textContent = `${alcanceVtc.toFixed(2)}m`;

    const vx = alcanceHz / tempo; //VELOCIDADE HORIZONTAL
    const vy = gravidade * tempo; //VELOCIDADE VERTICAL

    const veloFinal = Math.sqrt(Math.pow(veloHzInput, 2) + Math.pow(vy, 2)); //VELOCIDADE FINAL
    veloFinalDisplay.textContent = `${veloFinal.toFixed(2)}m/s`;

    veloHzDisplay.textContent = `${vx.toFixed(2)}m/s`;
    veloVtcDisplay.textContent = `${vy.toFixed(2)}m/s`;

});

let perguntaIdx = 0;
const pgElement = document.getElementById("perguntaEl");
const proxBtn = document.getElementById("proxBtn");

proxBtn.addEventListener("click", () => {

    perguntaIdx++;

    if(perguntasLancamentoHz.length > perguntaIdx){
        pgElement.textContent = perguntasLancamentoHz[perguntaIdx].enunciado;
    }
    else{
        perguntaIdx = 0;
        pgElement.textContent = perguntasLancamentoHz[perguntaIdx].enunciado;
    }

});