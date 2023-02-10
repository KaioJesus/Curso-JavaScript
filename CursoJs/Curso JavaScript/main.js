// // aula 1 - variaveis
// // camelcase -> primeira palavra em letra minúscula, as próximas começam com a letra maíscula, ex.: nomeCompleto;

// let nome = 'Kaio';
// let idade = 23;
// let altura = 176;

// console.log(nome, idade, altura);

// // aula 2 - Constantes

// // let -> forma de atribuição a uma variável que pode redefinir o valor que foi atribuida inicialmente

// let numeroAleatorio = 7;
// numeroAleatorio = 15;
// console.log(numeroAleatorio);

// // const -> forma de atribuição que receberá somente um valor (constante);

// // aula 3 - tipos primitivos
// let nomeDeNovo = 'Kaio Jesus'; // String literal
// let idadeDeNovo = 23; // number literal
// let estaAprovado = true; // boolean -> verdadeiro ou falso
// let sobrenome; // undefined -> não está definida
// let corSelecionado = null; // null -> redefinir um valor

// // aula 4 - tipagem

// typeof nome;// tipo da variável;

// // aula 5 - objetos

// // Tipos de referência -> objetos, arrays, functions

// let n = {}; // declaração de objeto, objeto vazio;
// let pessoa = {
//     nome: 'Kaio',
//     sobrenome: 'Jesus',
//     idade: 23,
//     altura: 175,
//     signo: 'escorpião'
// }; // objeto 

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome)

// // aula 6 - arrays -> conjunto de dados que pode ser acessado por um índice

// let familia = ['Pai', 'Mãe', 'Filhes'];

// console.log(familia[0]);
// // acessando pelo indice, sempre começa pelo 0
// console.log(familia);
// // acessando o array inteiro

// // exercícios -> definir um array de uma pessoa

// let carol = ['Caroline', 22, 'Campo Grande'];
// console.log(carol);

// // Aula 7 - Functions

// // Nome da função -> Verbo + Substantivo, ex.: resetaCor, transformarObjeto, alterarTamanho
// let corSite = "azul";

// function resetaCor(){
//     // função sem parâmetro que troca a cor pré-definida
//     corSite = "";
// }

// console.log(corSite);
// resetaCor();
// console.log(corSite);

// corSite = "Rosa";

// function trocaCor(cor, tonalidade){
//     // parâmetro
//     corSite = cor + ' ' +tonalidade; // concatenação de duas strings
//     // argumento
// }

// console.log(corSite);
// trocaCor("Verde", " claro");
// console.log(corSite);

// // Exercício -> Criar uma função que mude algo;

// let numero = 10;

// function mudaNumero(numeroDois){
//     numero = numeroDois;
// }

// console.log(numero)
// mudaNumero(59);
// console.log(numero)

// // Aula 8 -> Tipos de funções

// // Primeira -> Realiza uma tarefa e não devolve nada

// function dizerNome (){
//     console.log('Kaio');
// }


// // faz uum cálculo ou operação e retorna algo
// function multiplicarPorDois(valor){
//     return valor * 2;
// }

// console.log(multiplicarPorDois(30)); // 60

// let resultado = multiplicarPorDois(5); // 10
// // atribuindo uma função, o valor de uma função a uma variável

// console.log(resultado);

// // Aula 9 -> Operadores


// // Aula 10 
// // Operadores Aritméticos(matemáticos) -> +, -, *, /, **
// let salario = 100;
// console.log(salario + salario); // 200
// console.log(salario - salario); //0
// console.log(salario * salario); // 10 000
// console.log(salario / salario); // 1
// console.log(salario ** salario); // 1e+200

// // Operadores de incremento e decremento-> ++, --
// let idadeDois = 18;

// console.log(idadeDois++); // 18
// // mostra o resultado e incrementa +1, o mesmo vale para o --

// console.log(++idadeDois); // 20, por conta da incrementação do console log anterior + essa incrementação

// // incrementa +1 e mostra o resultado, o mesmo vale para o --

// // Aula 11
// // Operadores Atribuição -> =, +=, -=
// let valorTecladoGamer = 1000;
// console.log(valorTecladoGamer); // 1000

// valorTecladoGamer += valorTecladoGamer;
// // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// console.log(valorTecladoGamer); // 2000

// valorTecladoGamer -= valorTecladoGamer;
// // valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
// console.log(valorTecladoGamer);// 0

// // Aula 12
// // Operadores de comparação/igualdade

// // Igualdade estrita -> ===, compara os valores e o tipo -> forma mais utilizada
// console.log(1 === 1) // true, number e number
// console.log(1 === '1'); // false, number e string

// // igualdade solta -> =, compara os valores
// console.log(1 == 1) // true, number e number
// console.log(1 == '1'); // true, number e string

// // Aula 13
// // Operadores ternário -

// let pontos = 100;
// let tipo = pontos > 100 ? 'Premium' : 'Comum';
// console.log(tipo); // false, porque é 100 e não maior que 100, então comum

// pontos = 200;
// tipo = pontos > 100 ? 'Premium' : 'Comum';
// console.log(tipo); // true porque maior que 100, então premium

// // Aula 14
// // Operadores Lógicos -> and (&&), or (||), not

// // && -> retorna true se os dois forem true
// console.log(false && true); // false
// console.log(true && true); // true

// let maiorDeIdade = true;
// let possuirCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuirCarteiraDeTrabalho;
// console.log(podeAplicar); //true

// // || -> retorna true se um dois operandos forem true
// console.log(true || false); // true

// maiorDeIdade = false;
// possuirCarteiraDeTrabalho = true;
// podeAplicar = maiorDeIdade || possuirCarteiraDeTrabalho;
// console.log("Pode aplicar: ", podeAplicar); //true

// // ! -> operador negativo, o que tiver true será falso e vice-versa;~

// let candidatoRecusado = !podeAplicar;
// console.log("Candidato Recusado: ", candidatoRecusado); // false

// // Aula 15 - Operadores não booleanos

// // Falsy -> undefined, null, 0, false, '' (vazio), NaN (not a number)

// // Truthy -> nenhum dos acima

// let corPersonalizada = 'Vermelho';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;
// console.log(corPerfil); // quando ele acha um valor truthy, já para de fazer a comparação, 
// // ou seja, nesse caso ele viu o vermelho e nem olhou o valor da corPadrao

// // Aula 16

// // Exercício trocar cor da varíavel

// let a = 'Red';
// let b = 'Green';

// console.log(a); //vermelho
// console.log(b); // verde

// let c = '';
// c = a;
// a = b
// b = c;

// console.log(a); // verde
// console.log(b); // vermelho

// // Aula 17 - Condicionais -> If .. Else and Switch .. Case

// // Se - entao

// // Se a hora entiver entre 6 e 12: bom dia!
// // Se a hora entiver entre 12 e 18: boa tarde!
// // caso contrario : boa noite!

// let hora = 19;

// if (hora > 6 && hora < 12){
//     // codigo a ser a ser executado
//     console.log("Bom dia!")
// }

// else if (hora > 12 && hora < 18){
//     // codigo a ser a ser executado
//     console.log("Bom Tarde!")
    
// }
// else {
//     // codigo a ser a ser executado
//     console.log("Boa noite!")

// }

// // Aula 18 -> Switch Case

// let permissao = 'eu'; // comum, gerente, diretor

// switch (permissao) {
//     case 'comum':
//     console.log('Usuário comum')
//     break;
//     // para parar a condição caso tenha encontrado o valor certo

//     case 'gerente':
//     console.log('Usuário gerente')
//     break;

//     case 'diretor':
//     console.log('Usuário diretor')
//     break;

//     default:
//     console.log('Usuário não reconhecido');
//     // caso não caia em nenhum dos citados acima
// }






