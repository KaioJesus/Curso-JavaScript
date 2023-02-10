// Criar função somar que retorna soma de todos os múltiplos de 3 e 5


// limite -> até qual valor somar os múltiplos

function somar(limite){
    let soma = 0;
    for(let i = 1; i <= limite; i++){
        if(i % 3 === 0) 
            soma += i;
            
        if(i % 5 === 0)
            soma += i;
    }

    console.log(soma);
}

somar(6)