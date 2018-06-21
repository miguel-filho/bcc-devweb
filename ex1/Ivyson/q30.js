let cont = 5
let div = document.createElement("div")
div.id = "resultado"
document.body.appendChild(div)
function rgv(){
    
    if(cont == -1)
        cont = 0
    div.innerHTML = cont
    setTimeout('rgv()',1000)
    cont -= 1

}