function Teste() {
    let x = document.getElementById("x").value
    if(x % 2 == 0)
        document.getElementById("resultado").innerHTML = "PAR"
    else
    document.getElementById("resultado").innerHTML = "Ímpar"
}