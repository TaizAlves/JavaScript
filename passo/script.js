function calcular(){
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('.res')

    if (inicio.value.length == 0 || fim.value.length == 0  ||passo.value.length == 0)
    {
        res.innerHTML += `Impossivel contar, verifique os dados`
    }else {
        if (+(passo.value) ==0) 
        {
            
            window.alert(`Passo inválido. Será repassado o valor 1`)
            passo.value = 1 
            
        }

    passo = +(passo.value)
    inicio = +(inicio.value)
    if (inicio < +(fim.value) ){

        for( i = inicio, n = +(fim.value); i <= n ; i += passo)
        {
            if ( i > n - passo){
                res.innerHTML += `${i} `
            }else{
            res.innerHTML += `${i} \u{1F449}`
            }
        }
    }else{
        for( i = inicio ; i >= +(fim.value) ; i -= passo)
        {
            if ( i <  Number(fim.value) +passo)
            {
                res.innerHTML += `${i}  `
            }else
            {
            res.innerHTML += `${i} \u{1F449}`
            }
       }
    }

    }

    
}

