const perguntasLancamentoVtc = [

    {source: "../assets/lancVtc_assets/spaceship_lancVtc1.png"}

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
    const veloVtcInput = Number(document.getElementById("vyInput").value);

    if(unidade === "centimetros"){
        altura = altura / 100;
    }

    if(!gravidade){
        return 0;
    }

    const a = gravidade / 2; //FÓRMULA PARA TEMPO DE QUEDA PÓS LANÇAMENTO VERTICAL
    const b = -veloVtcInput;
    const c = -altura;

    const t1 = (-b + (Math.sqrt((b * b) - 4 * a * c))) / (2 * a); //RESULTADO 1 - BHASKARA
    const t2 = (-b - (Math.sqrt((b * b) - 4 * a * c))) / (2 * a); //RESULTADO 2- BHASKARA

    let bhskResultado = null;

    if(t1 < 0 && t2 < 0){ //SE AMBOS FOREM NEGATIVOS, RESULTADO = 0
        bhskResultado = 0;
    }
    else if(t1 < 0 && t2 > 0){ //SE T2 FOR POSITIVO E T1 FOR NEGATIVO, RESULTADO = T2
        bhskResultado = t2;
    }
    else if(t1 > 0 && t2 < 0){ //SE T1 FOR POSITIVO E T2 FOR NEGATIVO, RESULTADO = T1
        bhskResultado = t1;
    }
    else if(t1 > 0 && t2 > 0){ //SE AMBOS FOREM POSITIVOS, RESULTADO = Δ > 0 (Considera-se o maior número)
        bhskResultado = Math.max(t1, t2);
    }

    const tempoDisplay = document.getElementById("tempoDeQueda");
    const alcanceHzDisplay = document.getElementById("alcanceHz");
    const alcanceVtcDisplay = document.getElementById("alcanceVtc");
    const veloFinalDisplay = document.getElementById("veloFinal");
    const veloHzDisplay = document.getElementById("veloHz");
    const veloVtcDisplay = document.getElementById("veloVtc");

    const tempo = bhskResultado; //TEMPO DE QUEDA PÓS LANÇAMENTO VERTICAL
    tempoDisplay.textContent = `${tempo.toFixed(2)}s`;

    const alcanceHz = 0; //VELOCIDADE HORIZONTAL
    alcanceHzDisplay.textContent = `${alcanceHz.toFixed(2)}m`;

    const alcanceVtc = (Math.pow(veloVtcInput, 2)) / (2 * gravidade) + altura; //ALCANCE VERTICAL
    alcanceVtcDisplay.textContent = `${alcanceVtc.toFixed(2)}m`;

    const vx = 0; //VELOCIDADE HORIZONTAL
    const vy = veloVtcInput - gravidade * tempo; //VELOCIDADE VERTICAL

    const veloFinal = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2)); //VELOCIDADE FINAL
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

    if(perguntasLancamentoVtc.length > perguntaIdx){
        pgElement.src = perguntasLancamentoVtc[perguntaIdx].source;
        proxBtn.innerHTML = `<i class="fa-solid fa-atom"></i> Próxima questão <i class="fa-solid fa-atom"></i>` ;
    }
    else{
        perguntaIdx = 0;
        pgElement.src = perguntasLancamentoVtc[perguntaIdx].source;
    }

});