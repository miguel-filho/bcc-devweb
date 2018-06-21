const dispara = () => {
    contagemRegressiva(15)
}
function contagemRegressiva(cont)
{
    if(cont >= 0) {
        document.body.innerHTML = cont
        setTimeout(contagemRegressiva, 1000, cont-1);
    }
}