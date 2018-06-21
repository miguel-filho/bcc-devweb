function Calculasoma(){
    let campo1 = document.getElementById("entrada")
    let campo2 = document.getElementById("entrada2")


    if (isNaN(campo1.value) || isNaN(campo2.value)){
        alert ("Valor digitado não é numérico! Tente novamente!")
    }
    else if (campo1.value == "" || campo2.value == ""){
        alert ("Campo Vazio! Tente novamente!")
    }
    else {
    let valor1 = parseFloat((campo1).value)
    let valor2 = parseFloat((campo2).value)
        
    result.value = (valor1+valor2).toString()
    }
}