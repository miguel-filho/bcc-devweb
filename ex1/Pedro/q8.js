function showCpf(){
    let tag = document.getElementById("cpf")
    let info = tag.value
    let numeros = ""
    for(let i = 0; i < info.length; ++i){
        if(info[i] == '.' || info[i] == '-') 
            continue
        numeros += info[i]
    }
    tag.value = numeros    
}