function verificaString()
{
    let valorString =  document.getElementById("texto").value

    if (valorString.trim().toLowerCase() == 'dota' || valorString.toLowerCase().split(/\s+/g).indexOf('dota') >= 0)
        document.getElementById("resultado").innerHTML =  valorString + "(Verdadeiro)"
    else
        document.getElementById("resultado").innerHTML =  valorString + "(Falso)"
}