// Aula 22 -> Loop for .. in -> loops melhor para iteração sobre propriedades e objetos com elementos de um array

const pessoa = {
    nome: 'Kaio',
    idade: 23
};


// have vem da palavra key, key-value -> nesse exemplo, nome e idade são a 'chave', a key, value são 'Kaio' e 23, o valor
for (let chave in pessoa){
// nao tem indice nem variavel inicial nem contador, voce tem que definir sobre o que ele vai iterar, sobre o que vai buscar informação

    console.log(chave); // mostra nome e idade
    console.log(chave, pessoa) // mosta os valores de nome e idade
    console.log(pessoa.nome) // acessando a propriedade da palavra pessoa por ponto
    console.log(pessoa['idade']) // acessando a propriedade da palavra pessoa por colchetes, esse caso é melhor definido
    // quando você não sabe o nome da propriedade
}

const cores = ['Vermelho', 'Azul', 'Verde']; // array

for (let indice in cores) {
    console.log(cores[indice]);
}