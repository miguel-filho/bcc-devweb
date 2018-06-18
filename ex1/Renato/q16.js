// Questão 16
function imparpar(a){
    if(isNaN(a)){
        return "NaN";
    }else{
        if(a%2 == 0){
            return "par";
        }
        return "impar";
    }
}
function getImparPar(base_id) {
    const b = Number(document.getElementById(base_id).value);
    document.getElementById('resultado').innerHTML = imparpar(b);
}