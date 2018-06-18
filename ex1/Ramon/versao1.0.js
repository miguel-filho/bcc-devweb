var element = document.getElementById('myimage');
element.onclick = function() {
    if (element.src.match("lampada-on")) {
        element.src="./imagens/lampada.jpg";
    } else {
        element.src="./imagens/lampada-on.jpg";
    }
};