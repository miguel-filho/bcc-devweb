repete = () => {
    let tag = document.getElementById('resultado')
    for(let i = 0; i < 20; ++i){
        tag.innerHTML += 'repetição<br>'
    }
}

window.onload = repete