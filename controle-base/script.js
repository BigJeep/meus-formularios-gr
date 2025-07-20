
const arrPerdas = ["teste"];
const arrViolacoes = [];
const arrParadas = [];



// DOM

const aguardandoInicio = document.getElementById('qtde-sm-input');
const viagens = document.getElementById('qtde-viagem-input');
const perdas = document.getElementById('qtde-perdas-input');
const violacoes = document.getElementById('qtde-violacoes-input');
const paradas = document.getElementById('qtde-paradas-input');
const areaOutput = document.getElementById('area-output');
const copiarBtn = document.getElementById('btn-copiar');

// Eventos e Listeners


perdas.addEventListener ("input", function() 
{
const e = this;
addOcorrência (e.value, arrPerdas, "perdas");
arrPerdas.forEach(
function(valor, i) {
const teste = e.appendChild(document.createElement("div"))
teste.innerHTML = arrPerdas[i]; // parei aqui, mas provavelmente vou é refazer tudo de novo porque isso aqui tá uma bagunça já que não tá nada planejado
}

);
}
);

// Funções de eventos

function addOcorrência (num, arr, arrayNome) {




console.log (num);

  for (let i=0;i<num;i++) {

    arr[i] = `
<div class="template">
<div class="templatediv"> <label for="${arrayNome}-transportador-${i}">TRANSPORTADOR:</label> <input id="${arrayNome}-transportador-${i}" class="input-valores template-input">
</div>
<div class="templatediv"> <label for="${arrayNome}-placa-${i}">PLACA:</label><input id="${arrayNome}-placa-${i}" class="input-valores template-input">
</div>
<div class="templatediv"> <label for="${arrayNome}-horario-${i}">HORARIO:</label><input id="${arrayNome}-placa-${i}" class="input-valores template-input">
</div>
<div class="templatediv"> <label for="${arrayNome}-tratativa-${i}">TRATATIVA</label> <input type="radio" id="${arrayNome}-radioSim-${i}" name="tratativa-radio" class="input-valores template-input" selected>SIM <input type="radio" id="${arrayNome}-radioNao-${i}" name="tratativa-radio" class="input-valores template-input">NÃO
</div>
<div class="templatediv"> <label for="${arrayNome}-notas-${i}">NOTAS:</label><input id="${arrayNome}-notas-${i}" class="input-valores template-input">
</div>
</div>
`;

  }


 
}
       
function outputText () {
  
  
  
  
}
