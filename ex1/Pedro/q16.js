function getValue(id) {
    let valor = document.getElementById(id).value
    return valor                
}

function valido(x){
    return !isNaN(x) && x != ''
}

function verificaParidade(){
    let x = getValue("valor")
    let resp = "invalido"
    if(valido(x)){
        x = Number(x)
        if(x % 2 == 0) resp = "par"
        else resp = "impar"
    }

    document.getElementById("res").value = resp
    
} 