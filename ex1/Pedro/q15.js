function getValue(id) {
    let valor = document.getElementById(id).value
    return valor                
}

function valido(x){
    return !isNaN(x) && x != ''
}

function soma(){
    let a = getValue("a")
    let b = getValue("b")
    if(valido(a) && valido(b)){
        a = parseFloat(a)
        b = parseFloat(b)
    }
    else 
        a = b = 0
    document.getElementById("res").value = a+b
} 