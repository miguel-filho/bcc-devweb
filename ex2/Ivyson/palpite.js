const scanf = require('scanf')
const dados = require('./dados')

let tentativas = 0
let acertos = 0

dados.pega(function (soma) {
    
    console.log('Fazer Palpites 1 ou sair 0?')
    let opcao = scanf('%d')
    if (opcao == 0) {
        return false
    } else if (opcao == 1) {
        console.log('Infome um número: ');
        let num = scanf("%d")
        tentativas++
        if (num == soma) {
            acertos++
            console.log('Acertou')
        } else {
            console.log('Errou! Resposta correta: ' + soma)
        }
    } else {
        console.log('Valor inválido')
    }
    console.log('Tentativas / Acertos: ')
    console.log(tentativas + '/' + acertos)
    return true
})