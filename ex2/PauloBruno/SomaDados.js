const request = require('request')
const cheerio = require('cheerio')
let soma_dados = 0

function pegaDados(f) 
{
    request("https://www.random.org/dice/?num=10",function(erro, resposta, html){
        const $ = cheerio.load(html)
        let imagens = $('img')
        let total = 0
        for (let index of Object.keys(imagens)) {
            let img = imagens[index]
            if(img.type == "tag"&& img.name=="img")
            {
                soma_dados += parseInt(img.attribs.alt)
                console.log(img.attribs.alt)
            }
            
        }
        console.log(img.attribs.alt)
    })
    
}
module.exports ={
    pegaDados
}