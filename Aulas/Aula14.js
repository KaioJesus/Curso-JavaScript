// Aula 14
// Operadores Lógicos -> and (&&), or (||), not

// && -> retorna true se os dois forem true
console.log(false && true); // false
console.log(true && true); // true

let maiorDeIdade = true;
let possuirCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuirCarteiraDeTrabalho;
console.log(podeAplicar); //true

// || -> retorna true se um dois operandos forem true
console.log(true || false); // true

maiorDeIdade = false;
possuirCarteiraDeTrabalho = true;
podeAplicar = maiorDeIdade || possuirCarteiraDeTrabalho;
console.log("Pode aplicar: ", podeAplicar); //true

// ! -> operador negativo, o que tiver true será falso e vice-versa;~

let candidatoRecusado = !podeAplicar;
console.log("Candidato Recusado: ", candidatoRecusado); // false
