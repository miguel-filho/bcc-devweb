repete = () => {
    let tag = document.getElementById('resultado')
    for(let i = 0; i <= 100; ++i){
        tag.innerHTML += `${i}<br>`
    }
}

window.onload = repete