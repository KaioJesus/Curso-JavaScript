// Aula 7 - Functions

// Nome da função -> Verbo + Substantivo, ex.: resetaCor, transformarObjeto, alterarTamanho
let corSite = "azul";

function resetaCor(){
    // função sem parâmetro que troca a cor pré-definida
    corSite = "";
}

console.log(corSite);
resetaCor();
console.log(corSite);

corSite = "Rosa";

function trocaCor(cor, tonalidade){
    // parâmetro
    corSite = cor + ' ' +tonalidade; // concatenação de duas strings
    // argumento
}

console.log(corSite);
trocaCor("Verde", " claro");
console.log(corSite);

// Exercício -> Criar uma função que mude algo;

let numero = 10;

function mudaNumero(numeroDois){
    numero = numeroDois;
}

console.log(numero)
mudaNumero(59);
console.log(numero)
