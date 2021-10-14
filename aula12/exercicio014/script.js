function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora <12){
        img.src = 'morning.jpg'
        document.body.style.background = "A3A3F0"
        
    }else if(hora >= 12 && hora < 18){
        img.src = 'afternoon.jpg'
        document.body.style.background = "#ED7117"
    }else{
        img.src = 'night.jpg'
        document.body.style.background = "#28231D"
    }

}
