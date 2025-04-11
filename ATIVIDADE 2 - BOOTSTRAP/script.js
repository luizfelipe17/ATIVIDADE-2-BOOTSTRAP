document.getElementById('adicionarInfo').addEventListener('click', function(){document.getElementById
    ('novaInfoForm').style.display='block';
})

document.getElementById('adicionarInfo').addEventListener('click', function() {
    let novaInfo = document.getElementById('UC').value;
    if(novaInfo){
        let p = document.createElement('p');
        p.textContent = novaInfo;
        document.getElementById('perfil').appendChild(p);
        document.getElementById('novaInfoForm').style.display = 'none';
    }
  })

document.getElementById('removerInformacao').addEventListener('click', function() {
    let perfil = document.getElementById('perfil');
    let paragrafo = document.getElementsByTagName('p');

    if(paragrafo.length > 0){

        perfil.removeChild(paragrafo[paragrafo.length - 1])

    }

})

document.getElementById('btnEnviar').addEventListener('click', function(){

    alert("INFORMAÇÕES ENVIADAS")

})
