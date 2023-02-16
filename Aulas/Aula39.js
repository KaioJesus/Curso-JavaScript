// operador spread

const primeiro = [1, 2, 3];
const segundo =  [4, 5, 6];

const combinado = [...primeiro, '%', ...segundo]; //[...primeiro, 'a', ...segundo, 'b'];
console.log(combinado);

//juntando/concatenando elementos, dessa forma você consegue adicionar outros elementos mais facilmente, como mostrado acima;

const clonado = [...combinado];
//clonado

console.log(clonado);