const scanf = require('scanf')
const request = require('request')
const cheerio = require('cheerio')

function getSoma(func) {
    request("https://www.random.org/dice/?num=10", function (erro, resposta, html) {
        let $ = cheerio.load(html)
        let imagens = $('img')

        let somatorio = Array.prototype.reduce.call(imagens, 
            (anterior, atual) => anterior + parseInt(atual.attribs.alt), 0)
        
        let retorno = func(somatorio)
        if (retorno)
            getSoma(func)
    })
}

let tentativas = 0
let acertos = 0

getSoma(function(somatorio) {
    console.log('Pesca do Somatório: ' + somatorio)
    console.log('Opção 1: Apostar')
    console.log('Opção 2: Placar')
    console.log('Opção 3: Sair')

    let opcao = scanf("%d")

    switch (opcao) {
        case 1:
            console.log("Informe um valor")
            let valor = scanf("%d")

            tentativas++

            if (valor == somatorio) {
                console.log("Acertou!")
                acertos++
            } else {
                console.log('Errou!')
            }
            break;
        case 2:
            console.log(`De ${tentativas} tentativas, você acertou ${acertos} vezes`)
            break;
        case 3:
            return false
        default: 
            console.log('opção Inválida')
    }

    return true
})