function Calculasoma(){
    let campo1 = document.getElementById("entrada")
    let valor1 = parseFloat((campo1).value)
    let campo2 = document.getElementById("entrada2")
    let valor2 = parseFloat((campo2).value)
    result.value = (valor1+valor2).toString()
}