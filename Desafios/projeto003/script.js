function login(){
    let name = getElementById('txtuser')
    let pass = getElementById('txtsenha')
    name = name.toString()
    pass = pass.toString()
    if(name == 0 || pass == 0){
        document.alert('Dados inválidos!')
    } else {
        alert('tudo ok!')
    }
}