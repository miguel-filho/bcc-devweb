
function comparanumero(numrodigitado) {
        let p = Number(document.getElementById(numrodigitado).value);
        let s = Math.floor(Math.random()*3)+1;
        document.getElementById("numeroRandom").innerHTML = s;
        if(p == s){
            document.getElementById("resultado").innerHTML = "Número igual!";
        }
        else{
            document.getElementById("resultado").innerHTML = "Número diferente!";
        }
    }