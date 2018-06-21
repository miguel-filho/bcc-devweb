function Maior(){
    let age = parseInt(document.getElementById("x").value)
    let year = new Date().getFullYear()
    document.getElementById("resultado").innerHTML = "<br>" + (year - age) + "<br>"
}