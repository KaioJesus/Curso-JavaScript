// Encontrando elementos do tipo referencia -> elementos(tipos de referencia)
// referencia sao -> arrays, functions, objetos

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';

});
console.log(marca);

//exercicio

const flamengo = [
    {nome: 'brasileiro', titulo: 8}, //objetos dentro de um array
    {nome: 'libertadores', titulo: 3},
    {nome: 'copaDoBrasil', titulo: 4},
    {nome: 'mundial', titulo: 1},
]

const mengo = flamengo.find(function(mengo){
    return mengo.titulo < 8;
});

console.log(mengo);