function potencia(base, expo) {
    return base ** expo;
}

function getPontencial(base_id, expo_id) {
    const b = Number(document.getElementById(base_id).value);
    const e = Number(document.getElementById(expo_id).value);
    document.getElementById('resultado').innerHTML = potencia(b, e);
}
