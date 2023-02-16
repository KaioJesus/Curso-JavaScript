// Escreva uma função que usa 2 números e retorna o maior entre eles

// Forma um
let max = maiorValor(30, 30);
function maiorValor(numeroUm, numeroDois){
    if(numeroUm > numeroDois){
        return numeroUm;
    } else {
        return numeroDois;
    }
}
console.log(max);

// forma 2 de fazer
let maxDois = maiorValor(15,10);
function maiorValor(numeroUm, numeroDois){
    if(numeroUm > numeroDois){
        return numeroUm;
    } 
    return numeroDois; // se ele não acessar a primeira condição, ele acessará essa sem precisar do else
}

console.log(maxDois);

// forma 3 de fazer 
let maxTres = maiorValor(20,10);
function maiorValor(numeroUm, numeroDois){
    return numeroUm > numeroDois ? numeroUm : numeroDois;
    // ? -> se sim
    // : -> caso contrário
}
console.log(maxTres);
