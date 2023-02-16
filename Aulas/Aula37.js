// Esvaziando um array

let numeros = [1, 2, 3, 4, 5, 6];
let outros = numeros;

//solução 1 -> reatribuição
//numeros = [];

//se existir mais de uma referência nesse array, é possível que você não esteja apagando elas, por ex
//console.log(outros); // vai mostar [1, 2, 3, 4, 5, 6] mesmo que numeros esteja vazia, pq foi atribuido antes de ficar vazio


//solução 2 

//numeros.length = 0; //pegando o tamanho do array e transformando em 0
//console.log(outros); //nesse caso a referencia tmb é apagada


//solucao 3 -> metodo splice

numeros.splice(0, numeros.length); //começa no indice 0, apaga o tamanho inteiro
console.log(outros);
console.log(numeros);

//solução 4 -> metodo pop

//ele tira o ultimo, mas se usar um loop vai dar certo

// while(numeros.length > 0)
//     numeros.pop();

//exercicio -> criar outro array e usar os metodos utilizados anteriormente

