// aula 26 - natureza dinamica de objetos

// adicionar, deletar propriedades, metodos e funções em um objeto

const mouse = {
    color: 'verde',
    marca: 'razer'
};

// o objeto inicia com essas duas propriedades
// depois pode-se adicionar utilizando o nomeDoObjeto.novaPropriedade = atributo; ex, abaixo;

mouse.velocidadeDpi = 1800;
mouse.trocarDpi = function(){
    console.log('mudando DPI');
}

console.log(mouse);