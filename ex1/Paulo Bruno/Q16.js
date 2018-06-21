function par_ou_impar(){
  const v1 = Number(document.getElementById('nmbValor1').value)
  if(v1%2 == 0)
    document.getElementById('resultado').innerHTML = "Par"
  else {
    document.getElementById('resultado').innerHTML = "Impar"
  }

}
