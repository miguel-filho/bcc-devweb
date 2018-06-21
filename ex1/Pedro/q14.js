function getValue(id) {
    let valor = document.getElementById(id).value
    return valor                
}

function valido(x){
    return !isNaN(x) && x != ''
}

function pot(){
    let base = getValue("base")
    let exp = getValue("exp")
    if(valido(base) && valido(exp)){
        base = parseFloat(base)
        exp = parseFloat(exp)
        let potencia = Math.pow(base, exp)
        document.getElementById("res").value = potencia
    }
    else 
        alert("valores invalidos!")
} 