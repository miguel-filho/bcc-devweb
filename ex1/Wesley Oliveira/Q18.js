function maiormenor()
{
    let valor1 = parseInt(document.getElementById("valor1").value)     
    let idade = 2018 - valor1

    if(idade > 18)
        document.getElementById("resultado").innerHTML =  "Maior de Idade"
    else
        document.getElementById("resultado").innerHTML =  "Menor de Idade"
}