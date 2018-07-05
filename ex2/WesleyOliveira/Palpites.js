const dados = require('./Dados')
const scanf = require('scanf')

let tentou = 0
let acertou = 0

dados.requisita(function (somado) 
{
    console.log('Apostar -> (1) | sair -> (0)')
    let op = scanf('%d')

    if (op == 0) {
        return false
    } 
    else if (op == 1) 
    {
        console.log('Infome um número:');
        let num = scanf("%d")
        tentou++

        if (num == somado) 
        {
            acertou++
            console.log('Omedetô!! Vc acertou!')
        } else 
        {
            console.log('Eroooooooooooooooooooooooooooou! Dessa vez saiu:  ' + somado)
        }
    } 
    else if (op == 2) 
    {
        console.log('Tentou/Acertou')
        console.log(tentou + '/' + acertou)
    } 
    else
    {
        console.log('Valor inválido')
    }

    return true
})