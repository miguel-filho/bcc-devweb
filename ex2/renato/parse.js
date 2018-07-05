var getHtml = require('./getHtml')
const cheerio = require('cheerio')

function getSoma(exibeMenu) {
    getHtml( function(html) {
        const $ = cheerio.load(html);
        let soma = 0;
        let valores = "";
        const imgs = $('img');
        for (let index of Object.keys(imgs)) {
            if(imgs[index].name == 'img'){
                valores += "["+imgs[index].attribs.alt+"] ";
                soma += parseInt(imgs[index].attribs.alt);
            }
        }
        // soma = 30
        let menu = exibeMenu(valores, soma);
        if(menu == true){
            getSoma(exibeMenu);
        }
    });
}

module.exports = getSoma;