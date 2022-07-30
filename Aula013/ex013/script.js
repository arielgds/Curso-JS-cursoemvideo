function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var date = new Date()
    var hora = date.getHours ()
    var min = date.getMinutes ()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
        if (hora >= 0 && hora < 12) {
            //BOM DIA!
            img.src = 'image/manha.png'
        }
        else if (hora >= 12 && hora < 18){
            document.body.style.backgroundColor = '#a5d6f7'

            //BOA TARDE!
            img.src = 'image/tarde.png'
            document.body.style.backgroundColor = '#7b3110'
        }
        else {
            //BOA NOITE!
            img.src = 'image/noite.png'
            document.body.style.backgroundColor = '#865a87'


        }

}