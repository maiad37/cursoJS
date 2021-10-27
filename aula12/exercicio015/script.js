function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        
        if(document.getElementById("masc").checked){
            genero = 'masculino'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src', 'imagens/babyboy.jpg')
            }else if(idade < 21 ){
                img.setAttribute('src', 'imagens/teenboy.jpg')
            }else if(idade < 50 ){
                img.setAttribute('src', 'imagens/adultman.jpg')
            }else{
                img.setAttribute('src', 'imagens/oldman.jpg')
            }
        }else if(document.getElementById("fem").checked){
            genero = 'feminino'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src', 'imagens/babygirl.jpg')
            }else if(idade < 21 ){
                img.setAttribute('src', 'imagens/teengirl.jpg')
            }else if(idade < 50 ){
                img.setAttribute('src', 'imagens/adultwoman.jpg')
            }else{
                img.setAttribute('src', 'imagens/oldlady.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero: ${genero} -- Idade: ${idade} anos`
        res.appendChild(img)
    }
}