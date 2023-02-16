// Aula 32 - Strings

// adicionando elementos em um array

const array = [1,2,4];
//inicio
array.unshift(0);
console.log(array);
//meio
array.splice(3,0,3);
//splice('entre quais elementos voce vai por', 'se vai deletar algum elemento', 'o que voce quer adicionar')
console.log(array);
//fim
array.push(5);
console.log(array);

