function repita(){
for (var i = 0; i < 11; i++) {
  for (var j = 0; j < 11; j++) {
    document.getElementById('resultado').innerHTML += i + "x" + j + "=" + i*j + "<br>"
  }
  document.getElementById('resultado').innerHTML +="-----------//////////------------- <br>"
}
}
