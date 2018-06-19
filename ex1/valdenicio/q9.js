function fixing(){
    let x = document.getElementById("cpf")
    let test = x.value.length
        if (test == 3 || test == 7) 
            x.value += "."
        else if (test == 11) 
            x.value += "-"
}

/*
function salvar(){
    let x = document.getElementById("cpf").value
    alert("CPF salvo! " + x)
}
*/