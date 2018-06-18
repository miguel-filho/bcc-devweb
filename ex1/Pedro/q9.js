function atualizaCpf(){
    let tag = document.getElementById("cpf")
    let tam = tag.value.length

    if(tam == 3 || tam == 7) tag.value += "."
    else if(tam == 11) tag.value+='-'
    
}