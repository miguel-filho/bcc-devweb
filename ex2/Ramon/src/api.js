const request = require('request')
const cheerio = require('cheerio')

function executar(f) {
    request("https://www.random.org/dice/?num=10", function (erro, resposta, html) {
        const $ = cheerio.load(html)
        let dados = $('img')
        let total = 0
        for (let index of Object.keys(dados)) {
            let img = dados[index]
            if (img.type == "tag" && img.name == "img")
                total += parseInt(img.attribs.alt)
        }
        let retorno = f(total)
        if (retorno == true)
            executar(f)
    })
}

module.exports = {
    executar
}