function soma(){
    let x = parseFloat(document.getElementById("valor1").value)
    let y = parseFloat(document.getElementById("valor2").value)
    document.getElementById("resultado").value = (x+y).toString()
}