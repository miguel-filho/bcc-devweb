const request = require('request')
const cheerio = require('cheerio')

function executar(f) {
    request("https://www.random.org/dice/?num=10", function (erro, resposta, html) {
        const $ = cheerio.load(html)
        let imagens = $('img')
        let somatorio = 0
        for (let index of Object.keys(imagens)) {
            let img = imagens[index]
            if (img.type == "tag" && img.name == "img")
                somatorio += parseInt(img.attribs.alt)
        }
        let retorno = f(somatorio)
        if (retorno == true)
            executar(f)
    })
}

module.exports = {
    executar
}