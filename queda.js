const perguntasQueda = [

    {source: "./assets/queda_assets/spaceship_queda1.png"},
    {source: "./assets/queda_assets/spaceship_queda2.png"},

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

    if(unidade === "centimetros"){
        altura = altura / 100;
    }

    if(altura <= 0 || gravidade <= 0){
        return 0;
    }

    const tempoDisplay = document.getElementById("tempoDeQueda");
    const veloFinalDisplay = document.getElementById("veloFinal");

    const tempo = Math.sqrt(2 * altura / gravidade); //TEMPO DE QUEDA
    tempoDisplay.textContent = `${tempo.toFixed(2)}s`;

    const veloFinal = gravidade * tempo; //VELOCIDADE FINAL
    veloFinalDisplay.textContent = `${veloFinal.toFixed(2)}m/s`;

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
    window.scrollTo(0, 245);

    pgElement.classList.remove('displaying');
    pgElement.offsetHeight;

    if(perguntasQueda.length > perguntaIdx){
        pgElement.src = perguntasQueda[perguntaIdx].source;
        pgElement.classList.add('displaying');
        proxBtn.innerHTML = `<i class="fa-solid fa-atom"></i> Próxima questão <i class="fa-solid fa-atom"></i>` ;
    }
    else{
        perguntaIdx = 0;
        pgElement.src = perguntasQueda[perguntaIdx].source;
        pgElement.classList.add('displaying');
    }

});