// // Aula 18 -> Switch Case

let permissao = 'eu'; // comum, gerente, diretor

switch (permissao) {
    case 'comum':
    console.log('Usuário comum')
    break;
    // para parar a condição caso tenha encontrado o valor certo

    case 'gerente':
    console.log('Usuário gerente')
    break;

    case 'diretor':
    console.log('Usuário diretor')
    break;

    default:
    console.log('Usuário não reconhecido');
    // caso não caia em nenhum dos citados acima
}