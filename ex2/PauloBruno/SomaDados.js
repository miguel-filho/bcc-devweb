const request = require('request')
const cheerio = require('cheerio')
let soma_dados = 0

function pegaDados(resultado_dados) 
{
    request("https://www.random.org/dice/?num=10",function(erro, resposta, html){
        const $ = cheerio.load(html)
        let imagens = $('img')
        for (let index of Object.keys(imagens)) {
            let img = imagens[index]
            if(img.type == "tag"&& img.name=="img")
            {
                soma_dados += parseInt(img.attribs.alt)
            }
            
        }
        let retorno = resultado_dados(soma_dados)
        if(retorno == true)
            pegaDados(resultado_dados)
    })
}
module.exports ={
    pegaDados
}