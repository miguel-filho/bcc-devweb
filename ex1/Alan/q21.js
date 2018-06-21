function conta() {
    const repetica = document.getElementById('resultado')
    let text = ""

    for (let i = 0; i < 101; i += 2) {
      text += ' _'+ i
    }
    repetica.innerHTML += text
    }
  
onload = function() {
    conta()
}
