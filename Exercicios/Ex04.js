// medidor de velocidade

//velocidade max até 70
// a cada 5km acima do limite você ganha um ponto na carteira
//math.floor -> arredonda valores
// caso pontos > 12 -> 'carteira suspendida'

verificarVelocidade(71);

function verificarVelocidade(velocidade){
    const limite = 70;
    let quantoAcima = velocidade - limite;
    const kmPorPonto = 5;
    let pontos = Math.floor(quantoAcima / kmPorPonto);

    if (velocidade <= limite)
        console.log('Ok');
     else{
         if (pontos >= 12)
             console.log('Carteira suspendida')
        else 
             console.log('Pontos: ', pontos);
            }
}