function printar(){
    let x = document.getElementById("resultado")
    let text = ""
    for(let i = 0 ; i < 20 ; i++){
        text += 'repetição </br>'
    }
    x.innerHTML += text
}

window.onload = function() {
    printar()
}

