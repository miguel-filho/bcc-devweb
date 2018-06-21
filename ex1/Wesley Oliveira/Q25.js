function randomRangeInt(intBegin, intEnd) 
{
    return Math.floor(Math.random() * (intEnd-intBegin)) + intBegin
}

function aleatorio()
{
    let valordigitado = parseInt(document.getElementById("valor1").value)     
    let valorRandom = (randomRangeInt(1, 3))

    if(valordigitado == valorRandom)
        document.getElementById("resultado").innerHTML =  "É IGUAL SINHÔ"
    else
        document.getElementById("resultado").innerHTML =  "NÃO É IGUAL SINHÔ"
}