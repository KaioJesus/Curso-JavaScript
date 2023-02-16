// Aula 24 -> Factory functions (função de fábrica)

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

// encapsular a informação de um método que cria o objeto e não precise criar um monte de objeto e alterar um por um

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        // Quando a declação tem o mesmo nome, o parâmetro e o valor, como mostrado abaixo, pode ser feito da forma seguinte;
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,

        // mesma forma do que foi escrito acima
        // marcaCelular: marcaCelular,
        // tamanhoTela: tamanhoTela,
        // capacidadeBateria: capacidadeBateria,

        // ligar: function (){
        //     console.log("Fazendo ligação...")
        // }
        // nao precisa ser feito dessa forma a função, ela pode ser declarada do modo a seguir:

        ligar(){
            console.log("Fazendo ligação...")
        }
    }

}

const celularUm = criarCelular('Samsumg', 10.2, 5000);
console.log(celularUm)

// essa função permite que você crie vários objetos e caso dê erro em alguma coisa, você vai apenas precisar alterar a função