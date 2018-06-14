function soma(){
	const v1 = Number(document.getElementById('txtValor1').value);
	const v2 = Number(document.getElementById('txtValor2').value);

	if( isNaN(v1) ||  isNaN(v2)){
		alert("Um dos valores não é um numero");
	}
	else{ document.getElementById('txtResultado').value = v1 + v2;}
}



