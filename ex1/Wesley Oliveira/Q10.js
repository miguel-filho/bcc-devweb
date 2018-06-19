function exibir_resultado()
{
	const valor1 = Number(document.getElementById('valor1').value);
	const valor2 = Number(document.getElementById('valor2').value);

    if( isNaN(valor1) ||  isNaN(valor2))
    {
		alert("Valor não número detectado");
	}
    else
    {
         document.getElementById('resultado').value = valor1 + valor2
    }
}