function VerificarEntrada(){
    Convidado = document.getElementById('nome').value;
    ConvidadoKaio = ['Arthur', 'Carol', 'Andrade', 'Rodrigo', 'Gabriel'];

    if(ConvidadoKaio.includes(Convidado)){
        document.getElementById('PermissaoDeEntrada').innerText = "Você pode entrar!"
    } else {
        
        document.getElementById('PermissaoDeEntrada').innerText = "Você não pode entrar!"
    }

}

document.getElementsByClassName('button').click(VerificarEntrada());
