let img =  document.createElement("img")
img.id = "resultado"
img.style = "width:100px"
img.style.position = 'fixed'
document.body.appendChild(img)
let i = 0

function animar(){
    if(i > 2)
        i = 0 
    img.src = "../imagens/urso" + i + ".png"
    setTimeout(animar,300)
    i += 1
}

animar()

let x = 0

function anda() {
    x += 10
    if (x > window.innerWidth)
        x = 0
    img.style.left = x + "px"
    setTimeout(anda, 300)
}

anda()