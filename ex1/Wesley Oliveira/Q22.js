function repetir()
{
    for (let i = 0; i <= 10; i++) 
    {
        for (let j = 0; j <= 10; j++)
        {
            document.getElementById("resultado").innerHTML +=  i + " X " + j + " = " + i * j + "<br>"        
            if(j == 10)
                document.getElementById("resultado").innerHTML +=  "------------------------" + "<br>"
        }
    }
}