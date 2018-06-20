function digitou() {
    let campo = document.getElementById('cpf')
    let cpf = campo.value

    if (cpf.length >= 14)
        campo.value = cpf.replace(/[\.\-]/g, '')
}