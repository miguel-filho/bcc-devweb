function getCpf(){
    let x = document.getElementById("cpf").value
    let num = ""
    for (let i = 0; i<x.length ; i++)
    {
        if (x[i] == "." || x[i] == "-")
            continue
        num += x[i]
    }
    alert(num)
}