const request = require('request')
const cheerio = require('cheerio')

let somado = 0
function requisita(valor) 
{
    request("https://www.random.org/dice/?num=10", function (erro, resposta, html) 
    {
        const $ = cheerio.load(html)
        let imagens = $('img')
        for (let index of Object.keys(imagens)) 
        {
            let imagem = imagens[index]
            if (imagem.type == "tag" && imagem.name == "img")
                somado += parseInt(imagem.attribs.alt)                
        }
        let retorno = valor(somado)
        if(retorno == true)
            requisita(valor)
    })
}

module.exports = {requisita}