const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}webview

const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempos[0]);
contadores[1].textContent = calculaTempo(tempos[1]);
contadores[2].textContent = calculaTempo(tempos[2]);
contadores[3].textContent = calculaTempo(tempos[3]);

const contadores = document.querySelectorAll(“.contador”);
const tempoObjetivo1 = new Date(“2023-10-05T00:00:00”);
const tempoObjetivo2 = new Date(“2023-12-05T00:00:00”);
const tempoObjetivo3 = new Date(“2023-12-30T00:00:00”);
const tempoObjetivo4 = new Date(“2024-02-01T00:00:00”);
const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempos[0]);

function atualizaCronometro(){
for (let i=0; i<contadores.length;i++){
contadores[i].textContent = calculaTempo(tempos[i]); } }
function comecaCronometro(){
atualizaCronometro();
setInterval(atualizaCronometro,1000); }
comecaCronometro();}
}
}

if (tempoFinal > 0){
return dias + “ dias “ + horas + “ horas “ + minutos + “ 
minutos “ + segundos + “ segundos”;
} else {
return “Prazo Finalizado”;
  }
