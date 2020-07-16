let num = document.getElementById('num')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }

}

function inLista(n, l) {
    //indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
    if (l.indexOf(Number(n)) != -1 ){
        return true
    } else{
        return false
    }
}

function adicionar() { 
    if ( isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option') // pq está dentro do select
        item.text = ` Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else {
        window.alert("Valor inválido ou já informado")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert("Adicione valores antes de finalizar")

    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        
        for (let pos in valores){
            soma += valores[pos]

            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        let media = soma/(valores.length)
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo são ${tot} números cadastrados </p>`
        res.innerHTML += `<p>O maior número = ${maior} e o menor = ${menor} </p>`
        res.innerHTML += `<p>A soma  = ${soma}  </p>`
        res.innerHTML += `<p>E a <strong>média</strong>  = ${media}  </p>`

    }
}