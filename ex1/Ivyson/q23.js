let div = document.createElement("div")
document.body.appendChild(div)

function Dota(){
    console.log("sheat")
    let str =  document.getElementById("dota").value

    if (str.trim().toLowerCase() == 'dota' || str.toLowerCase().split(/\s+/g).indexOf('dota') >= 0)
        div.innerHTML = str + "(Verdadeiro)"    
    else
        div.innerHTML = str + "(Falso)"
    
}