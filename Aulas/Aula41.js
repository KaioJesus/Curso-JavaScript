const numeros = [1,2,3,4,5];
const combinado = numeros.join('|'); // metódo que combina as strings com algum valor //1|2|3|4|5
console.log(combinado); // adiciona o '|' entre os valores

const frase = 'Olá, bem vindo ao curso';
const resultado = frase.split(' '); // metódo que separa os valores e pede alguma condição para separar, nesse caso é o espaço entre as palavras
console.log(resultado);

console.log(resultado.join('|')); //Olá,|bem|vindo|ao|curso

const fraseDois = ['Obrigado', 'e', 'volte', 'sempre!'];
const resultadoDois = fraseDois.join('!');
console.log(resultadoDois);
console.log(resultadoDois.split('!'));