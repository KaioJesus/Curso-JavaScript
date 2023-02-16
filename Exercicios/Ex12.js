//Exercício 12 - Igualdade de objetos

function Postagem(titulo, mensagem, autor){
    //pratica de códiglo limpo, max 3 parametros
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);