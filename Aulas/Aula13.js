// // Aula 13
// // Operadores ternário -

let pontos = 100;
let tipo = pontos > 100 ? 'Premium' : 'Comum';
console.log(tipo); // false, porque é 100 e não maior que 100, então comum

pontos = 200;
tipo = pontos > 100 ? 'Premium' : 'Comum';
console.log(tipo); // true porque maior que 100, então premium