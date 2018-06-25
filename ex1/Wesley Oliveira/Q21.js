function repetir()
{
    let i = 0
    while(i != 501)
    {
        if(i % 2 == 0)
            document.getElementById("resultado").innerHTML +=  i + "<br>"
        i++
    }
}