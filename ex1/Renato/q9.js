let cont = 0;
function mostrar_cpf(){
	let cpf = document.getElementById('txtCpf').value;
	if(cont >= 3 && cont % 3 == 0 && cont <= 12){
		if(cont % 9 == 0){
			document.getElementById('txtCpf').value = cpf+"-";						
		}
		else{
			if(cont % 12 == 0){}
			else{ document.getElementById('txtCpf').value = cpf+".";}
		}
	}
	//Zerar o contador quando a tecla backspace for usada para editar a entrada digitada.
	if(cpf == ""){cont = 0;}
	cont += 1;
}



