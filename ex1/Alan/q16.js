function Verifica(){
    let campo1 = document.getElementById("entrada")


    
    
    if (isNaN(campo1.value) ){
        alert ("Valor digitado não é numérico! Tente novamente!")
    }
    else if (campo1.value == "" ){
        alert ("Campo Vazio! Tente novamente!")
    }
    else {
    let valor1 = parseInt((campo1).value)
    if (valor1 % 2 == 0 )
        alert("O numero digitado é PAR")
    else
        alert("O numero digitado é IMPAR")
    }
}