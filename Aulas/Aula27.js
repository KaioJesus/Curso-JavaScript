// Aula 27 - Clonar objetos

// const celular = {
//     marcaCelular: 'Apple',
//     tamanhoTela: {
//         vertical: 800,
//         horizontal: 400
//     },
//     capacidadeBateria: 5000,
//     ligar: function (){
//         console.log("Fazendo ligação...")
//     }
// }

// clonando um objeto ja criado e adicionando novas propridades
const novoObjeto = Object.assign({
    bateria: 5000
}, celular);
console.log(novoObjeto); // pegou as propriedades do celular e pôs a bateria

// outra forma de clonar: spread -> {...obj};

// const objetoDois = [...celular];
// console.log(objetoDois);