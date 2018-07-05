const parse = require('./parse.js')
const scanf = require('scanf')

let chute = 0, acertos = 0;

function exibiMenu(valDosDados, soma) {
    console.log("Escolha um dos seguintes comandos: apostar <valor inteiro entre 10 e 60>, placar, ou sair\n>");
    let comando = scanf("%s");
    
    if (comando == 'apostar') {
        let v = scanf("%d");
        console.log(printTab("Valores dos dados: " + valDosDados));
        console.log(printTab("Soma: " + soma));
        chute++;
        if (v == soma) {
            console.log(printTab("Parabéns!! Você acertou!!"));
            acertos++;
        }
        else {
            console.log(printTab("Ohh!! Você errou!!"));
        }
    }
    else if (comando == 'placar') {
        console.log(printTab("Acertos/Chutes: " + acertos + "/" + chute));
    }
    else if (comando == 'sair') {
        console.log(printTab("Você saiu!"));
        return false;
    }
    return true;
}


parse(exibiMenu);
function printTab(s) {return "\t[***]" + s;}