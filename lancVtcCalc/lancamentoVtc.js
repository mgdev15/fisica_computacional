const calcBtn = document.getElementById("botaoCalcular");

calcBtn.addEventListener("click", () => {

    const altura = Number(document.getElementById("alturaInput").value);
    const gravidade = Number(document.getElementById("gravidadeInput").value);
    const veloVtcInput = Number(document.getElementById("vyInput").value);

    const tempoDisplay = document.getElementById("tempoDeQueda");
    const alcanceHzDisplay = document.getElementById("alcanceHz");
    const alcanceVtcDisplay = document.getElementById("alcanceVtc");
    const veloFinalDisplay = document.getElementById("veloFinal");
    const veloHzDisplay = document.getElementById("veloHz");
    const veloVtcDisplay = document.getElementById("veloVtc");

    const tempo = Math.sqrt(2 * altura / gravidade); //TEMPO DE QUEDA
    tempoDisplay.textContent = `${tempo.toFixed(2)}s`;

    const alcanceHz = veloVtcInput * tempo; //ALCANCE HORIZONTAL
    alcanceHzDisplay.textContent = `${alcanceHz.toFixed(2)}m`;

    const alcanceVtc = gravidade * Math.pow(tempo, 2) / 2; //ALCANCE VERTICAL
    alcanceVtcDisplay.textContent = `${alcanceVtc.toFixed(2)}m`;

    const vx = alcanceHz / tempo; //VELOCIDADE HORIZONTAL
    const vy = gravidade * tempo; //VELOCIDADE VERTICAL

    const veloFinal = Math.sqrt(Math.pow(veloVtcInput, 2) + Math.pow(vy, 2)); //VELOCIDADE FINAL
    veloFinalDisplay.textContent = `${veloFinal.toFixed(2)}m/s`;

    veloHzDisplay.textContent = `${vx.toFixed(2)}m/s`;
    veloVtcDisplay.textContent = `${vy.toFixed(2)}m/s`;

});