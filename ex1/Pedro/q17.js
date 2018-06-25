function getValue(id) {
    let valor = document.getElementById(id).value
    return valor                
}

function valido(x){
    return !isNaN(x) && x != ''
}

function desconto(){
    let x = getValue("valor")
    let resp = "invalido"
    if(valido(x)){
        resp =  Number(x)*0.05         
    }
    document.getElementById("res").value =  resp
    
} 