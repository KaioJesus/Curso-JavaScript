// criar função para mostrar os números primos anterios ao limite dado

// primos
// compostos


// forma um
function exibirNumerosPrimos(limite){
    for (let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            // nao precisa verificar que o numero é divisil por 1 e por ele mesmo, pq a gente ja sabe que isso acontece
            // precisamos saber se o numero é divísivel por qualquer outro numero, caso nao seja, é primo
            if(numero % divisor === 0){
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) console.log(numero);
    }
}

exibirNumerosPrimos(15);


function exibirNumerosPrimos2(limite){
    for (let numero = 2; numero <= limite; numero++){
  
        if (numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
    if(numero % divisor === 0){
        return false;
        }
    }
    return true;
}

exibirNumerosPrimos2(15);




