function buscadota(string){
    let palavra = document.getElementById(string).value;
    let resultado = "Falso";
    if(palavra.search('dota') != -1){
        resultado = "Verdadeiro"
    }
    document.getElementById("resultado").innerHTML = resultado;
}