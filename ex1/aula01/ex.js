function ola() {
    const str = "Olá mundo!"
    alert(str)
}

function dist(p1, p2) {
    let x = Math.pow(p1.x-p2.x, 2)
    let y = Math.pow(p1.y-p2.y, 2)
    return Math.sqrt(x+y)
}

function show() {
    let i = document.getElementById('input_nome')
    alert("O Nome Completo é: " + i.value);
}

function atualizar() {
    let iNome = document.getElementById('input_nome')
    let iTamanho = document.getElementById('input_tamanho')
    iTamanho.value = iNome.value.length
}

function interruptor(estado) {
    const img = document.getElementById('img_lampada')
    if (estado == true)
        img.setAttribute('src', 'on/lampada.jpg')
    else
        img.setAttribute('src', 'off/lampada.jpg')
}

function formatar() {
    let i = document.getElementById('input_cpf')
    i.value = i.value.replace(/[-.]/ig,'')
}

function somar() {
    let v1 = document.getElementById('valor1') 
    let v2 = document.getElementById('valor2') 
    let r = document.getElementById('resultado') 
    r.value = parseInt(v1.value) + parseInt(v2.value)
}