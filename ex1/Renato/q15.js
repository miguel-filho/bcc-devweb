function potencia(a, b) {
    if(a === undefined || b === undefined){
        return 0;
    }
    else{
        if(isNaN(a) || isNaN(b)){
            return 0;
        }
    }
    return a + b;
}

function getPontencial(base_id, expo_id) {
    const b = Number(document.getElementById(base_id).value);
    const e = Number(document.getElementById(expo_id).value);
    document.getElementById('resultado').innerHTML = potencia(b, e);
}
