function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora =10
    var minutos = data.getMinutes()
    var time = `${hora}hs ${minutos} min.`
    msg.innerHTML = `Agora são ${time}`
    if (hora >= 0 && hora <12){
     img.src= "https://images.pexels.com/photos/4127302/pexels-photo-4127302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
     document.body.style.background = '#e2cd9f'

    }else if (hora >12 && hora <= 18){
        img.src = "https://images.pexels.com/photos/940880/pexels-photo-940880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
         document.body.style.background = '#b9846f'

    }else{
        img.src= "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        document.body.style.background = '#515154'
    }

}