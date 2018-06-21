function randomRangeInt(intBegin, intEnd) 
{
    return Math.floor(Math.random() * (intEnd-intBegin)) + intBegin
}

function aleatorio()
{
    alert(randomRangeInt(1, 11))
}