function Calculaidade(){
    let campo1 = document.getElementById("entrada")
    let anoNascimento = parseFloat(document.getElementById("anoNascimento").value)
    let data = new Date()
    let anoAtual = data.getFullYear()
    let resultado = anoAtual - anoNascimento
    if (resposta == "" || resposta == 0 || anoNascimento > anoAtual)
        document.getElementById("resposta").value = "Valor invalido"
    else if (resultado < 18)
        document.getElementById("resposta").value = "Menor de idade"
    else
        document.getElementById("resposta").value = "Maior de idade"

    
    }
