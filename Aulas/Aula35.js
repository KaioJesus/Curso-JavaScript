// Aula 35 

//função da aula passada
const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';

});
console.log(marca);

// se encontrar retorna, se não encontrar retorna undefined

// arrow function

console.log(marcas.find((marca) => {
    return marca.nome === 'a';
}));

// sendo apenas um parâmetro pode ser feito das seguintes formas: 

// não é necessário parenteses para um parametro
console.log(marcas.find(marca => {
    return marca.nome === 'a';
}));

// não é necessário return para um parãmetro
console.log(marcas.find(marca => marca.nome === 'a'));

//exercício

const flamengo = [
    {nome: 'brasileiro', titulo: 8}, //objetos dentro de um array
    {nome: 'libertadores', titulo: 3},
    {nome: 'copaDoBrasil', titulo: 4},
    {nome: 'mundial', titulo: 1},
]

//formas de serem feitas as arrows functions
console.log(flamengo.find(mengo => mengo.titulo < 8));

console.log(flamengo.find((mengo) => {
    return mengo.titulo > 1;
}));

console.log(flamengo.find(mengo => {
    return mengo.titulo > 3 && mengo.titulo < 8;
}));

