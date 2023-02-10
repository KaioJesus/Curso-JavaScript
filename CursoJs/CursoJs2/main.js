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

// for (let indice in cores) {
//     console.log(cores[indice]);
// }

// Aula 23 -> For- of -> melhor para arrays

for(let cor of cores){
    console.log(cor);
}

const names = ['Kaio', 'Caroline', 'Celeste'];
for (let name of names){
    console.log(name);
}

// Aula 24 -> Factory functions (função de fábrica)

// const celular = {
//     marcaCelular: 'Apple',
//     tamanhoTela: {
//         vertical: 800,
//         horizontal: 400
//     },
//     capacidadeBateria: 5000,
//     ligar: function (){
//         console.log("Fazendo ligação...")
//     }
// }

// encapsular a informação de um método que cria o objeto e não precise criar um monte de objeto e alterar um por um

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        // Quando a declação tem o mesmo nome, o parâmetro e o valor, como mostrado abaixo, pode ser feito da forma seguinte;
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,

        // mesma forma do que foi escrito acima
        // marcaCelular: marcaCelular,
        // tamanhoTela: tamanhoTela,
        // capacidadeBateria: capacidadeBateria,

        // ligar: function (){
        //     console.log("Fazendo ligação...")
        // }
        // nao precisa ser feito dessa forma a função, ela pode ser declarada do modo a seguir:

        ligar(){
            console.log("Fazendo ligação...")
        }
    }

}

const celularUm = criarCelular('Samsumg', 10.2, 5000);
console.log(celularUm)

// essa função permite que você crie vários objetos e caso dê erro em alguma coisa, você vai apenas precisar alterar a função

// Aula 25 -> Funções de construtor
// faz a mesma coisa que o factory construtor


//Pascal Case - Primeira letra maiuscula da palavra -> UmDoisTres

function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo ligação ...');
    }
}

const celular = new Celular('Asus', 5.5, 5000);
// instanciando um objeto através dos parâmetros definido no método construtor
console.log(celular);

// Criando um método construtor
function Console(marcaConsole, nomeConsole){
    this.marcaConsole = marcaConsole;
    this.nomeConsole = nomeConsole;
}

const consoleUm = new Console('Sony', 'Playstation 5');
const consoleDois = new Console('Sony', 'Playstation 4');
const consoleTres = new Console('Sony', 'Playstation 3');
console.log(consoleUm, consoleDois, consoleTres);

// aula 26 - natureza dinamica de objetos

// adicionar, deletar propriedades, metodos e funções em um objeto

const mouse = {
    color: 'verde',
    marca: 'razer'
};

// o objeto inicia com essas duas propriedades
// depois pode-se adicionar utilizando o nomeDoObjeto.novaPropriedade = atributo; ex, abaixo;

mouse.velocidadeDpi = 1800;
mouse.trocarDpi = function(){
    console.log('mudando DPI');
}

console.log(mouse);

// Aula 27 - Clonar objetos

// const celular = {
//     marcaCelular: 'Apple',
//     tamanhoTela: {
//         vertical: 800,
//         horizontal: 400
//     },
//     capacidadeBateria: 5000,
//     ligar: function (){
//         console.log("Fazendo ligação...")
//     }
// }

// clonando um objeto ja criado e adicionando novas propridades
const novoObjeto = Object.assign({
    bateria: 5000
}, celular);
console.log(novoObjeto);

// outra forma de clonar: spread -> {...obj};

const objetoDois = [...celular];
console.log(objetoDois);