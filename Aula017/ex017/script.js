let num = document.getElementById('txtnum')
let lista = document.getElementById('flista')
let res = document.querySelector('#result')
let valores = []

function numeroListado (n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }   
}

function listado (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(numeroListado(num.value) && !listado(num.value, valores)){
        valores.push(Number(num.value))
        let itemLista = document.createElement('option')
        itemLista.text = `Valor ${num.value} adicionado.`
        lista.appendChild(itemLista)
        res.innerHTML = ``
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function final(){
    if (valores.length == 0){
        alert('adicione valores antes de finalizar!')
    }   else {
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                media = soma / valores.length
                if (valores[pos]> maior)
                maior = valores[pos]
                if (valores[pos] < menor)
                menor = valores[pos]
            }


            res.innerHTML = ``
            res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
            res.innerHTML += `<p> O maior número é o ${maior}.</p>`
            res.innerHTML += `<p> O menor número é o ${menor}.</p>`
            res.innerHTML += `<p> A soma entre eles é ${soma}.</p>`
            res.innerHTML += `<p> A média entre eles é ${media}.</p>`


        }   
}