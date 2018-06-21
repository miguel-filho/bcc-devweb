verifica = () => {
    let frase = document.getElementById('frase').value
    let fraseMinusculo = frase.toLowerCase()
    let ok = fraseMinusculo.search('dota') != -1
    document.getElementById('res').innerHTML += frase + " -> " + ok + '<br>' 
}