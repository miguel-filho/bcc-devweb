let div =  document.createElement("div")
document.body.appendChild(div)

function randomRangeInt(intBegin, intEnd) {
    return Math.floor(Math.random() * (intEnd-intBegin)) + intBegin
}
function comp(){

    let x = parseInt(document.getElementById("n").value)
    let ale = randomRangeInt(1,4)

    if(x == ale)
        div.innerHTML = "Igual"
    else
        div.innerHTML = "Diferente"
    alert(ale)
}