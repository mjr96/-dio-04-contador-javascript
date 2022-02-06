//criacao das funcoes de incremento e decremento 
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

//Adicionando addEventListener
var botaoDuvida = document.querySelector(".botaoDuvida");
var conteudoNovo = document.querySelector(".conteudoNovo");


function addConteudo(){
    conteudoNovo.innerHTML = "------------Clique um dos botoes abaixo------------";
}

botaoDuvida.addEventListener("click", addConteudo);

//Condicoes que faz com que nao passe de 5 ou -5


//Condicao que faz com que o numero mude de cor sempre que ficar negativo, ou seja <0
function valorColorido(){
    if (numeroAtual<0) {
        numeroAtualTela.style.color ("red");
    }
}