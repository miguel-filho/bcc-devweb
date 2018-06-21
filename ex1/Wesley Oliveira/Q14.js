function exponencial()
{
    let valor1 = parseInt(document.getElementById("valor1").value)     
    let valor2 = parseInt(document.getElementById("valor2").value)   
    document.getElementById("resultado").innerHTML =  "Resposta é: " + Math.pow(valor1, valor2)
}