function troca() {
    let imagem = document.getElementById('imagem')
    if (imagem.src.endsWith('lampadaoff.jpg'))
        imagem.src = 'lampada-on.jpg'
    else 
        imagem.src = 'lampadaoff.jpg'
}