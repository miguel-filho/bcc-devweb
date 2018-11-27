

const nomes = []

const byFrequencia = (a, b) => {
    return -(a.frequencia - b.frequencia)
}

function adicionar(nome) {
    let obj = nomes.find((e) => {
        return e.nome === nome
    })

    if (obj === undefined) {
        nomes.push({ nome: nome, frequencia: 1 })
    } else {
        ++obj.frequencia;
    }

    nomes.sort(byFrequencia);
}

function descricao(obj) {
    return obj.nome + ' (' + obj.frequencia + ')'
}

function criarItem(obj, index) {
    let e = document.createElement('li')
    e.innerHTML = descricao(obj)
    e.setAttribute('onclick', 'excluir('+index+')')
    return e
}

function atualizarHTML() {
    const list = document.getElementById('nomes')
   list.innerHTML = ''
    nomes.forEach(function (obj, index) {
        list.appendChild(criarItem(obj, index))
    })
}

function novoNome() {
    adicionar(document.getElementById('nome').value)
    atualizarHTML()
}

function atualizarHTMLItem(index) {
    const list = document.getElementById('nomes')
    let itens = document.getElementsByTagName('li')

    if (nomes[index].frequencia == 0) {
        nomes.splice(index,1)
        list.removeChild(list.children[index])
    } else {
        list.children[index].innerHTML = 
            descricao(nomes[index])
    }
}

function excluir(index) {
    --nomes[index].frequencia
    atualizarHTMLItem(index)
}