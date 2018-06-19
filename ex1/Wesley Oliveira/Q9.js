let contador = 0;
function exibir_cpf()
{
	let cpf = document.getElementById('txtCpf').value;
    if(contador >= 3 && contador <= 12)
    {
        if(contador == 9)
        {
			document.getElementById('txtCpf').value = cpf + "-";						
		}
        else if(contador == 3 || contador == 6)
        {
             document.getElementById('txtCpf').value = cpf + ".";
        }
	}
    contador += 1;
}