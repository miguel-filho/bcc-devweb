function calc(){
    let v1 = document.getElementById("v1")
    v1 = parseInt(v1.value)
    if(v1 % 2 == 0 )
        alert("O numero " + v1 + " é PAR")
    else
        alert("O numero " + v1 + " é IMPAR")
}