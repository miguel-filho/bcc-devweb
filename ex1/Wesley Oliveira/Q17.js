function desconto()
{
    let valor1 = parseInt(document.getElementById("valor1").value)     
    let desconto = valor1 * 0.05
    document.getElementById("resultado").innerHTML =  desconto
}