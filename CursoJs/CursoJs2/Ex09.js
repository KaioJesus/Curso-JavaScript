// Criar uma função que exibe a quantidade de * que aquela linha possui

function exibirAsterisco(linhas){

    // forma um
    // let asterisco = '*';
    // let somaAsterisco = '';
    // for (let i = 1; i <= linhas; i++){
    //     somaAsterisco = somaAsterisco + asterisco;
    //     console.log(somaAsterisco)
    // }

    // forma 2
    // loop aninhado
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}

exibirAsterisco(10)