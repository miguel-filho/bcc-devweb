function Maior_Idade(){
  const v1 = Number(document.getElementById('nmbValor1').value)
  const r = 2018-v1
  if (r>=18)
    document.getElementById('resultado').innerHTML = "Maior de Idade : "+r
  else
    document.getElementById('resultado').innerHTML = "Menor de Idade : "+r
}
