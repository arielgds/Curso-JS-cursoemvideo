function calcSimples(){
    var numIni1 = document.getElementById('txtnumini1')
    var porcento1 = document.getElementById('txtporcento1')
    var meses1 = document.getElementById('txtmeses1')
    var resSimples = document.getElementById('ressimples')
    numIni1 = Number(numIni1.value)
    porcento1 = Number(porcento1.value)
    meses1 = Number(meses1.value)
    var calcfinal = numIni1+((numIni1 * porcento1 / 100) * meses1)
    var vlParc = calcfinal / meses1

    resSimples.innerHTML = `O valor final que será pago é de <b>R&#36;${calcfinal} </b>parcelado em ${meses1} vezes de <b>R&#36;${vlParc}</b>.`
}

function composto(){
    var numIni2 = document.getElementById('txtnumini2')
    var porcento2 = document.getElementById('txtporcento2')
    var meses2 = document.getElementById('txtmeses2')
    var resComp = document.getElementById('rescomp')
    numIni2 = Number(numIni2.value)
    porcento2 = Number(porcento2.value)
    meses2 = Number(meses2.value)
    var comp = numIni2 *(1+porcento2/100)**meses2
    var vlParc1 = comp / meses2
    var comp = Number(comp.length)

    resComp.innerHTML = `O valor que será pago no final é de ${comp}, e o valor das parcelas é de ${vlParc1}!`
}