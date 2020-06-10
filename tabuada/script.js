function tabuada(){
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if(num.value.length == 0){
        window.alert(`Digite um número válido.`)
    }else{
        num = Number(num.value)
        tab.innerHTML = ""

        for ( i = 1; i <= 10; i++){
            let add = document.createElement('option')
            add.text = `${num} x ${i} = ${num*i}`
            add.value = `tab${i}`
            tab.appendChild(add)

        }
    }
}