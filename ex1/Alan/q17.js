function Calcula(){
    let campo1 = document.getElementById("entrada")


    
    
    if (isNaN(campo1.value) ){
        alert ("Valor digitado não é numérico! Tente novamente!")
    }
    else if (campo1.value == "" ){
        alert ("Campo Vazio! Tente novamente!")
    }
    else {
    let valor1 = (((parseFloat((campo1).value))*5)/100)
    document.getElementById("resultado").value= valor1


        alert("O Valor com desconto concedido é de  é   " +valor1+    "  reais" )
    
    }
}