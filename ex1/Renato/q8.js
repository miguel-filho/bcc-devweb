function mostrar_cpf(){
	const cpf = document.getElementById('txtCpf').value;
	if(cpf.length == 13){
		document.getElementById('txtCpf').value = cpf.replace(/[-.]/g,"");		
	}
}



