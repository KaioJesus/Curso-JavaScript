// Aula 30 - Template Literal 

const mensagemAulaTrinta = 'Oi isso é minha mensagem';
// tipos de literais -> objects {}, boolean true, false, string '', "", template ``;
// `` -> Definir string strings com crases permite que você pule linhas, bote aspas, sem ser necessário usar sequencias de escape

const outra = `Oi isso é a minha 'primeira' mensagem`;
console.log(outra)

const nomeQualquer ='Kaio';

//para caso voce queira trocar algo dentro da string, você pode usar variáveis;
const recado = `Olá ${nomeQualquer}
    
Sejá muito bem vindo!

Espero que goste muito!`;
console.log(recado)