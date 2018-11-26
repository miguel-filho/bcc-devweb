function desconto() {
    let i = document.getElementById('valor')
    let valor = parseInt(i.value)
    let p = document.getElementById('resultado')
    if (isNaN(valor))
        p.innerHTML = "Valor inválido"
    else
        p.innerHTML = valor * 0.05;
}

function verificaIdade() {
    let i = document.getElementById('idade')
    let idade = Date.now() - (new Date(i.value))

    let p = document.getElementById('msg')
    if (idade < 567993600000)
        p.innerHTML = 'Menor de idade'
    else
        p.innerHTML = 'Maior de idade'
}


function tabuada(t) {
    let code = "<div class='tabuada'>"
    for (let i = 1; i <= 10; ++i) {
        code += 
          "" + t +" x " +i+" = " + (t*i) +"<br/>"
    }
    code += "</div>"
    return code
}

function fmt(s, sz = 2) {
    s = '' + s
    while (s.length < sz)
        s = '0' + s
    return s
}

function horario() {
    let date = new Date()
    let dia = fmt(date.getDate())
    let mes = fmt(date.getMonth())
    let ano = fmt(date.getFullYear(), 4)
    let hor = fmt(date.getHours())
    let min = fmt(date.getMinutes())
    let sec = fmt(date.getSeconds())

    let str = dia + '/' + mes + '/' + ano + ' '
            + hor + ':' + min + ':' + sec;

    const div = document.getElementById('res26')
    div.innerHTML = str

    setTimeout('horario()', 1000)
}

window.onload = () => {
    for (let i = 0; i < 20; ++i) {
        let div = document.getElementById('res')
        div.innerHTML += 'Repetição <br/>'
    }

    let div = document.getElementById('res22')
    for (let t = 1; t <= 10; ++t)
        div.innerHTML += tabuada(t)

    horario()
}