repete = () => {
    let tag = document.getElementById('resultado')
    for(let i = 0; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            tag.innerHTML += `${i} x ${j} = ${i*j} <br>`
        }
        tag.innerHTML += "<br>"
    }
}

window.onload = repete