// Divisível por 3 -> retorna Fizz
// Divisível por 5 -> retorna Buzz
// Divisível por 5 e 3 -> retorna FizzBuzz
// Divisível por nenhum deles -> retorna o proprio numero
// Não é um número -> retorna não é o numero

// forma um

let resultado = FizzBuzz(true);
function FizzBuzz(numero){
    if (typeof numero !== 'number'){
        // para verificar se é um número ou não
        return 'Isso não é um número'
    }
    else if(numero % 3 === 0 && numero % 5 === 0){
        return 'FizzBuzz';
    } else if (numero % 5 === 0){
        return 'Buzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else if(numero % 3 !== 0 && numero % 5 !== 0){
        return numero;
    } 
}
console.log(resultado)

// segunda forma
let resultadoDois = FizzBuzz();
function FizzBuzz(numero){
    if (typeof numero !== 'number'){
        // para verificar se é um número ou não
        return 'Isso não é um número'
    }
    else if(numero % 3 === 0 && numero % 5 === 0){
        return 'FizzBuzz';
    } else if (numero % 5 === 0){
        return 'Buzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    }
    // se não entra em nenhuma dessa condições, não necessariamente é preciso de um else
    return numero;
}
console.log(resultadoDois);


    
        
      