const request = require('request')
const cheerio = require('cheerio')
let soma = 0
function pega(anonymous){
        request("https://www.random.org/dice/?num=10", function (error, response, html) {
        let $ = cheerio.load(html)
        let imgs = $('img')
        for (let index of Object.keys(imgs)) {
            let img = imgs[index]
            if (img.type == 'tag' && img.name == "img")
                soma += parseInt(img.attribs.alt)
        }
        let retorno = anonymous(soma)
        if (retorno == true)
            pega(anonymous) 
    })  
}
module.exports = {
    pega
}