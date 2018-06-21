let i = 1
function Cont(){

    while(i <= 500){
        if(i % 2 == 0)
            document.getElementById("resultado").innerHTML += i + "<br>"
        i++
    }
    
}