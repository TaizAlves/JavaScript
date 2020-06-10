function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#ano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || +(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >=0 & idade < 10){
                //criança
                img.setAttribute('src','https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )

            }else if (idade <21){
                //jovem
                img.setAttribute('src','https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )
            }else if ( idade < 50){
                // adulto
                img.setAttribute('src','https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )
            }else if (idade <65){
                // senhor
                img.setAttribute('src','https://images.pexels.com/photos/3149903/pexels-photo-3149903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )

            }else{
                //idoso
                img.setAttribute('src','https://images.pexels.com/photos/3814617/pexels-photo-3814617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )
            }
        }else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >=0 & idade < 10){
                //criança
            img.setAttribute('src','https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )

            }else if (idade <21){
                //jovem
                img.setAttribute('src','https://images.pexels.com/photos/4132306/pexels-photo-4132306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )
            }else if ( idade < 50){
                // adulto
                img.setAttribute('src','https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )

            }else if (idade <65){
                // senhor
                img.setAttribute('src','https://images.pexels.com/photos/2790438/pexels-photo-2790438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )

            }else{
                //idoso
                img.setAttribute('src','https://images.pexels.com/photos/2050976/pexels-photo-2050976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' )

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}