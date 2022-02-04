var numeroAtual = 0;
var numeroAtualTela = document.getElementById("numeroAtual");


function increment(){
    numeroAtual = numeroAtual + 1;
    numeroAtualTela.innerHTML = numeroAtual;
}

function decrement(){
    numeroAtual = numeroAtual - 1;
    numeroAtualTela.innerHTML = numeroAtual;
}