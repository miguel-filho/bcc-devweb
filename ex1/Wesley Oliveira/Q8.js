function exibir_cpf()
{
	const cpf = document.getElementById('txtCpf').value;
    
    if(cpf.length == 13)
    {
        document.getElementById('txtCpf').value = cpf.replace(/[-.]/g,"");	
        const teste = document.getElementById('txtCpf').value;
        alert(teste)
	}    
}