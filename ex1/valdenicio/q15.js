function calc(){

    let v1 = document.getElementById("v1")
    let v2 = document.getElementById("v2")
    if (isNaN(v1.value) || isNaN(v2.value)){
        alert ("Valor digitado não é numérico! Tente novamente!")
    }
    else if (v1.value == "" || v2.value == ""){
        alert ("Campo Vazio! Tente novamente!")
    }
    else {
        v1 = parseInt(v1.value)
        v2 = parseInt(v2.value)
        resp = v1+v2
        alert("A soma entre " + v1 + " + " + v2 + " = " + resp)
    }
}