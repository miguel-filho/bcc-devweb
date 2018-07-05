const scanf = require('scanf')
const dado = require('./SomaDados')
let chutes = 0
let acertos = 0

dado.pegaDados(function (soma_dados) {
    console.log('O que deseja? Aposta 1 ou Sai 0?')
    let escolha = scanf('%d')
    if(escolha == 0)
        return false
    else if(escolha==1){
        console.log('Diga sua aposta: ')
        let n_aposta = scanf("%d")
        chutes++
        if(n_aposta==soma_dados)
        {
            acertos++
            console.log('Parabens você Acertou!')
        }else
        {
            console.log('Errouuu! A resposta certa e: '+soma_dados)
        }
    }else
    {
        console.log('Escolha invalida')
    }
    console.log('Tentativas: ' +chutes)
    console.log('Acertos: ' +acertos)
    return true
})