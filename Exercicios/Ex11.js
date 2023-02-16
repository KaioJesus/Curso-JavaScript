// Objeto endereço

// Criar um objeto endereço que contem:

// Rua, cidade, cep, exibirEndereco(endereco);

//let -> para algo que possa ser alterado
//const -> algo que nao será alterado

//forma um
let endereco = {
    rua: 'Capitão pires',
    cidade: 'Rio de Janeiro',
    cep: 21340120,
}

function exibirEndereco(){
    console.log(endereco);
}

exibirEndereco();



//forma2
let enderecoDois = {
    rua: 'a',
    cidade: 'b',
    cep: 'c',
}

function exibirEnderecoDois(enderecoDois){
    for(let chave in enderecoDois)
        console.log(chave, enderecoDois[chave]);
};

exibirEnderecoDois(enderecoDois);

