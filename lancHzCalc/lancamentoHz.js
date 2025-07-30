const perguntasLancamentoHz = [

    {source: "../assets/lancHz_assets/spaceship_lancHz1.png"},
    {source: "../assets/lancHz_assets/spaceship_lancHz2.png"},

]

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
    const veloHzInput = Number(document.getElementById("vxInput").value);
    
    if(unidade === "centimetros"){
        altura = altura / 100;
    }

    if(!gravidade){
        return 0;
    }

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

    const vx = veloHzInput //VELOCIDADE HORIZONTAL
    const vy = gravidade * tempo; //VELOCIDADE VERTICAL

    const veloFinal = Math.sqrt(Math.pow(veloHzInput, 2) + Math.pow(vy, 2)); //VELOCIDADE FINAL
    veloFinalDisplay.textContent = `${veloFinal.toFixed(2)}m/s`;

    veloHzDisplay.textContent = `${vx.toFixed(2)}m/s`;
    veloVtcDisplay.textContent = `${vy.toFixed(2)}m/s`;

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

    if(perguntasLancamentoHz.length > perguntaIdx){
        pgElement.src = perguntasLancamentoHz[perguntaIdx].source;
        proxBtn.innerHTML = `<i class="fa-solid fa-atom"></i> Próxima questão <i class="fa-solid fa-atom"></i>` ;
    }
    else{
        perguntaIdx = 0;
        pgElement.src = perguntasLancamentoHz[perguntaIdx].source;
    }

});