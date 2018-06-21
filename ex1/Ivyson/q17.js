function Desconto() {
    let x = parseInt(document.getElementById("x").value)
    let desc = x * 0.05
    let soma = x - desc
    document.getElementById("resultado").innerHTML = "Valor total = " + x + "<br>Valor Desconto = " + desc + "<br>Valo total com desconto = " + soma
    
}