// Encontrando elementos primitivos -> elementos(primitivos)

const numeros = [1, 2, 3, 4, 2, 3, 4, 3, 2, 3];
//[0, 1, 2, 3] -> indice

console.log(numeros.indexOf(2)); // 1
//indexof -> vai retornar o indice de algo buscado

console.log(numeros.lastIndexOf(2)); // 8
// vai buscar o ultima vez que o mesmo numero apareceu e retornar seu indice


console.log(numeros.includes(2)); // true
//retorna se existe ou não tal elemento dentro de uma function ou variável;