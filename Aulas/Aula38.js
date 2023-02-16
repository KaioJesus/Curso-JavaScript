const primeiro = [1, 2, 3];
const segundo =  [4, 5, 6];

//combinar/concatenar
const combinado = primeiro.concat(segundo);
console.log(combinado);


//dividir
const dividido = combinado.slice(1,); //nunca extrai o ultimo valor, vai do primeiro indice até o penultimo
console.log(dividido);

//exercicio -> array de letra e usar os metodos ensinados

const a = ['a', 'b', 'c'];
const b = ['d', 'e', 'f'];

const combinacao = a.concat(b);
console.log(combinacao)

const divisao = combinacao.slice(1,4); //do indice 1 ao indice 3, não extrai o indice 4
console.log(divisao);

console.log(combinacao.slice(2)); // pegou do indice 2 em diante;

