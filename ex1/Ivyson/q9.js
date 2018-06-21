let cont = 0
function Add() {

    
    let  cpf = document.getElementById("cpf").value
    let newcpf =  cpf.replace(/[-.]/g,"")
    let tam = newcpf.length
    if(cont <= 1 && tam != 0){
        if(tam % 3 == 0){
            document.getElementById("cpf").value = cpf + "."
            cont = cont + 1
        }
        
    }
    if(tam == 9){
        document.getElementById("cpf").value = cpf + "-"
    }

    

}