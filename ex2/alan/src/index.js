const scanf = require('scanf')
const api = require('./api')

let tentativas = 0
let acertos = 0

api.executar(function (soma) {
    //console.log('shh!! O valor é ' + soma + ' mas nao diga a ninguem shhh!');
    console.log('Voce deseja apostar (1) ou exibir o placar (2) ou sair (0)?')
    let opcao = scanf('%d')

    if (opcao == 0) {
        return false
    } else if (opcao == 1) {
        console.log('Infome um número');
        let num = scanf("%d")
        tentativas++

        if (num == soma) {
            acertos++
            console.log('Acertou')
        } else {
            console.log('Errou! O valor correto seria ' + soma)
        }
    } else if (opcao == 2) {
        console.log('Tentativas/Acertos')
        console.log(tentativas + '/' + acertos)
    } else {
        console.log('Valor inválido')
    }

    return true
})