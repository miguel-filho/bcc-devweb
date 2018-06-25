function imparpar()
{
    let valor1 = parseInt(document.getElementById("valor1").value)     
    
    if(valor1 % 2 == 0)
    {
        document.getElementById("resultado").innerHTML =  "Par"
    }
    else
    {
        document.getElementById("resultado").innerHTML =  "Impar"
    }
    
}