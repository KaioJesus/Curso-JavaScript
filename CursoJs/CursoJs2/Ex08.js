// Exercício nota Escola
// Obter a média a partir de um array
// 0 - 49: F
// 50 - 59: E
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

// forma um
const array = [100, 100, 100];

// function mediaAluno(notas){
//     let provas = 0;
//     for(let nota of notas){
//         provas += nota;
//     }
//     const media = provas / (notas.length);

//     if(media <= 49)
//         return 'F';
//     else if (media <= 59)
//         return 'E';
//     else if (media <= 69)
//         return 'D'
//     else if (media <= 79)
//         return 'C'
//     else if (media <= 89)
//         return 'B'
//     else
//         return 'A'

// }

// forma 2
function mediaAluno(notas){
    let provas = 0;
    for(let i = 0; i < notas.length; i++){
        provas += notas[i];
    }
    const media = provas / (notas.length);

    if(media <= 49)
        return 'F';
    else if (media <= 59)
        return 'E';
    else if (media <= 69)
        return 'D'
    else if (media <= 79)
        return 'C'
    else if (media <= 89)
        return 'B'
    else
        return 'A'
        
}

// forma 3
// function mediaAluno(notas){
//     const medias = calcularMedia(notas);  
//     if(media <= 49) return 'F';
        
//     else if (media <= 59) return 'E';
//     else if (media <= 69) return 'D';
//     else if (media <= 79) return 'C';
//     else if (media <= 89) return 'B';
//     else return 'A' 
// }

// function calcularMedia(array){
//     let soma = 0;
//     for (let valor of array){
//         soma += valor;
//     }
//     return soma/array.length;
// }

console.log(mediaAluno(array));