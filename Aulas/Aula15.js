// // Aula 15 - Operadores não booleanos

// // Falsy -> undefined, null, 0, false, '' (vazio), NaN (not a number)

// // Truthy -> nenhum dos acima

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil); // quando ele acha um valor truthy, já para de fazer a comparação, 
// ou seja, nesse caso ele viu o vermelho e nem olhou o valor da corPadrao