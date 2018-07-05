const scanf = require('scanf')
const codigo = require('./src/codigo')

let tentativas = 0
let acertos = 0

codigo.executar(function (soma) {
	
	console.log('Digite (1) para jogar')
	console.log('Digite (2) para exibir o placar')
	console.log('Digite (0) para sair')
	let opcao = scanf('%d')
	var numero = 0;

	if (opcao == 0) {
		return false
	} 
	else if (opcao == 1) {

		while (numero < 10 || numero > 60) {
			console.log('Infome um número de 10 a 60');
			let num = scanf("%d")
			var numero = num;
			if (numero < 10 || numero > 60){
				console.log('O número esta fora do range de 10-60, tente novamente')
			}
		}

		tentativas++

		if (numero == soma) {
			acertos++
			console.log('Você acertou!')
		} 
		else {
			console.log('Errou! O número correto seria ' + soma)
		}
	} 
	else if (opcao == 2) {
		console.log('Tentativas/Acertos')
		console.log(tentativas + '/' + acertos)
	} 
	else {
		console.log('Opção inválida')
	}

	return true
})