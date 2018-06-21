function soma()
{
    let resultado = 0
    let valor1 = parseInt(document.getElementById("valor1").value)     
    let valor2 = parseInt(document.getElementById("valor2").value)   
    

    if(valor1 != valor1 || valor2 != valor2)
    {
        document.getElementById("resultado").innerHTML =  resultado
    }
    else
    {
        resultado = valor1 + valor2
        document.getElementById("resultado").innerHTML =  resultado
    }
    
}