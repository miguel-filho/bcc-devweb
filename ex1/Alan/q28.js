Palavra = (nome, freq) => {
    return {nome,freq}
} 

listaPalavras = []

function buscaPalavra(palavra){
    for(let i = 0; i < listaPalavras.length; i++){
        if(palavra == listaPalavras[i].nome)
            return listaPalavras[i];
    }
    return null;
}

function addPalavra(){
   
    let nome = document.getElementById("nome").value
    let res = buscaPalavra(nome)
    if(!res){
        let novaPalavra = Palavra(nome, 1)
        listaPalavras.push(novaPalavra)
    }
    else{
        res.freq++
    }
    updateView()
}

function updateView(){
    let tagDiv = document.getElementById("rank")
    let acu = ""
    listaPalavras.sort(function(a, b){return  b.freq-a.freq})
    for(let i = 0; i < listaPalavras.length; i++){
        acu += `<li> ${listaPalavras[i].nome}:${listaPalavras[i].freq}</li>`
    }
    tagDiv.innerHTML = acu
}