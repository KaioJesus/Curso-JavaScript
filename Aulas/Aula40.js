// foreach -> iterando um array

const numeros = [1,2,3,4,5]

// for (numero of numeros)
//     console.log(numero);


//faz a msm coisa que acima
numeros.forEach(function(numero){
    console.log(numero);
});

numeros.forEach((numero) => {
    console.log(numero);
});

numeros.forEach((numero, indice) => console.log(numero, indice));

//exercicio -> fazer a mesma coisa que acima

const letras = ['a', 'b', 'c'];

for (letra of letras)
    console.log(letra);

letras.forEach((letra, indice) => console.log(letra, indice));


