repete = () => {
    let tag = document.getElementById('resultado')
    for(let i = 0; i <= 500; ++i){
        if(i % 2 == 0)
            tag.innerHTML += `${i}<br>`
    }
}

window.onload = repete