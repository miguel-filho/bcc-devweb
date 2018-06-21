function Remover() {

    let  cpf = document.getElementById("cpf").value
    document.getElementById("cpf").value = cpf.replace(/[-.]/g,"")

}