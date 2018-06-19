/*function nasc(){
    let v1 = parseFloat(document.getElementById("v1").value)
    v1 = v1.length
        if (x == 2 || x == 5)
            x += "/"
    let resp = v1.split("/")

}
*/
function verificar(){
    let v1 = parseFloat(document.getElementById("v1").value)
    let d = new Date()
    let a = d.getFullYear()
    let res = a - v1
    if (res == "" || resp == 0)
        document.getElementById("resp").value = "Valor invalido"
    else if (res < 18)
        document.getElementById("resp").value = "Menor de idade"
    else
        document.getElementById("resp").value = "Maior de idade"
}