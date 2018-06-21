function Soma(){

    
    let x = parseInt(document.getElementById("x").value)     
    let y = parseInt(document.getElementById("y").value)   
    if(x != x || y != y)
        document.getElementById("resultado").innerHTML = 0
    else
        document.getElementById("resultado").innerHTML =  x + y

}