let v1, v2, test = 1
/*
function valida(){
    let v1
    if (v1 = document.getElementById("valor1") != Number){
        alert("Erro! Digite um valor númerico")
        test = 0
    }
    if (v2 = document.getElementById("valor2") != Number){
        alert("Erro! Digite um valor númerico")
        test = 0
    }
}
*/
function somar(){

    let v1 = parseFloat(document.getElementById("valor1").value)
    let v2 = parseFloat(document.getElementById("valor2").value)
    document.getElementById("resp").value = (v1+v2).toString()
}