function Calculaexponencial(){
    let campo1 = document.getElementById("entrada")
    let valor1 = parseFloat((campo1).value)
    let campo2 = document.getElementById("entrada2")
    let valor2 = parseFloat((campo2).value)
    let resultado = Math.pow(valor1 , valor2)
    result.value = resultado.toString()
}