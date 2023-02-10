// criar um método para ler propriedades de um objeto e 
// e exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Anthony Russo',
    personagem: 'Hommem-de-Ferro'
};

function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop])
        }
    }
}

exibirPropriedades(filme)