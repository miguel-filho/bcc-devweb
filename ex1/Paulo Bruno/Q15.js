function soma(){
  const v1 = Number(document.getElementById('nmbValor1').value)
  const v2 = Number(document.getElementById('nmbValor2').value)
  if(v1==0 || v2==0)
    document.getElementById('resultado').innerHTML = "0"
  else {
    document.getElementById('resultado').innerHTML = v1**v2
  }

}
