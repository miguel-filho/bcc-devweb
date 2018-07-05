let request = require('request');

function getHtml(f){
    request('https://www.random.org/dice/?num=10', function(erro, request, html){
        f(html);
    });
}

module.exports = getHtml;