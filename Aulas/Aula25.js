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
