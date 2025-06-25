const calcBtn = document.getElementById("botaoCalcular");

function calcular(){

    const altura = Number(document.getElementById("alturaInput").value);
    const gravidade = Number(document.getElementById("gravidadeInput").value);
    const veloVtcInput = Number(document.getElementById("vyInput").value);

    if(!gravidade){
        return 0;
    }

    const a = gravidade / 2;
    const b = -veloVtcInput;
    const c = -altura;

    const t1 = (-b + (Math.sqrt((b * b) - 4 * a * c))) / (2 * a);
    const t2 = (-b - (Math.sqrt((b * b) - 4 * a * c))) / (2 * a);

    let bhskResultado = null;

    if(t1 < 0 && t2 < 0){
        bhskResultado = 0;
    }
    else if(t1 < 0 && t2 > 0){
        bhskResultado = t2;
    }
    else if(t1 > 0 && t2 < 0){
        bhskResultado = t1;
    }
    else if(t1 > 0 && t2 > 0){
        bhskResultado = `Δ > 0`;
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