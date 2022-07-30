function contar(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let cont = document.getElementById('txtpasso')
    let res = document.getElementById('result')

    if (ini.value.length == 0 || fim.value.length == 0 || cont.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(cont.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{270b}`
}