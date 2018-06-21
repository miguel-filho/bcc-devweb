// Questão 17
function desconto(a){
    if(isNaN(a)){
        return "NaN";
    }else{
        return a * 0.05;
    }
}
function getDesconto(valor_id) {
    const v = Number(document.getElementById(valor_id).value);
    document.getElementById('resultado').innerHTML = desconto(v);
}

// Questão 18
function idade(a){
    if(isNaN(a)){
        return "NaN";
    }else{
        const idade = new Date().getFullYear() - a;
        if(idade >= 18){
            return "Maior de idade";
        }
        return "Menor de idade";
    }
}
function getIdade(valor_id) {
    const v = Number(document.getElementById(valor_id).value);
    document.getElementById('resultado').innerHTML = idade(v);
}

// Questão 19
function repete(){
    let i;
    let saida = "";
    for (i = 0; i < 20; i++) {
        saida += i+1+". Repetição <br>"; 
    }
    document.getElementById("resultado").innerHTML = saida;
}

// Questão 20
function conta100(){
    let i;
    let saida = "";
    for (i = 0; i <= 100; i++) {
        saida += i+" "; 
    }
    document.getElementById("resultado").innerHTML = saida;
}

// Questão 21
function conta500pares(){
    let i;
    let saida = "";
    for (i = 0; i <= 500; i++) {
        if(i % 2 == 0){
            saida += i+" "; 
        }
    }
    document.getElementById("resultado").innerHTML = saida;
}

//Questão 22
function tabuada(){
    let i;
    let j;
    let saida = "";
    for (i = 0; i <= 10; i++) {
        for(j = 0; j <= 10; j++){
            saida += i+"x"+j+"="+i*j+"<br>";
        }   
        saida += "<br>"
    }
    document.getElementById("resultado").innerHTML = saida;
}

// Questão 23
function dota(txt_id){
    let frase = document.getElementById(txt_id).value;
    let t = "Falso";
    if(frase.search('dota') != -1){
        t = "Verdadeiro"
    }
    document.getElementById("resultado").innerHTML = t;
}

// Questão 24
function random1a10(){
    document.getElementById("resultado").innerHTML = Math.floor(Math.random() * 10) + 1;;
}

// Questão 25
function random1a3(txtEntrada){
    const n = Number(document.getElementById(txtEntrada).value);
    const a = Math.floor(Math.random() * 3) + 1;
    document.getElementById("txtAleatorio").innerHTML = a;
    if(n == a){
        document.getElementById("resultado").innerHTML = "Mesmo número";
    }
    else{
        document.getElementById("resultado").innerHTML = "";
    }
}

// Questão 26
function dataHora(){
    const d = new Date();
    let dh = "";
    dh =  String(d.getDate());
    dh += String("/"+d.getMonth());
    dh += String("/"+d.getFullYear());
    dh += String(" "+d.getHours());
    dh += String(":"+d.getMinutes());
    dh += String(":"+d.getSeconds());
    document.getElementById("resultado").innerHTML = dh;
}

// Questão 27
let nomes = [];
function listaNomes(entrada){
    let name = document.getElementById(entrada).value;
    let ul = document.getElementById('saida');
    
    if(name == ""){}
    else{
        nomes.push(name);
    }
    //limpando a lista
    let elemento = document.getElementById("saida");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
    let e = nomes.sort();
    e.forEach(function(nome){    
        let li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
}

// Questão 28
let palavras = {};
let lista = [];
function maisFrequente(entrada){
    let name = document.getElementById(entrada).value;
    if(name == ""){}
    else{
        if(palavras[name] == undefined){
            palavras[name] = 1;
        }
        else{
            palavras[name] += 1;
        }
    }
    //nomes = Object.keys(palavras)
    chaves = Object.keys(palavras)
    lista = []
    for(let i in chaves){
        lista.push({
            nome: chaves[i],
            freq: palavras[chaves[i]]
        })
    }

    lista.sort(function(a , b){return b.freq - a.freq})
    let acu = ""
    lista.forEach((ele) => {
        acu += "<li>" + ele.nome + ":" + ele.freq + "</li>";
    })
    document.getElementById('saida').innerHTML = acu;
}

// Questão 29
let vetor = [], cont = 0
function listaDestaque(){
    let nome = document.getElementById("txtNome").value;
    if(nome != ""){
        vetor.push(nome);
    }
    let acum = "";
    for(let j in vetor){
        if(j % 2 == 0){
            acum += "<li>"+vetor[j]+"</li>"
        }
        else{
            acum += "<li style=\"background-color:#ABAACB\">"+vetor[j]+"</li>"
        }
    }
    document.getElementById('ul_saida').innerHTML = acum;
}

//Questão 30
const dispara = () => {
    contagemRegressiva(10)
}
function contagemRegressiva(cont)
{
    if(cont >= 0) {
        document.body.innerHTML = cont
        setTimeout(contagemRegressiva, 1000, cont-1);
    }
}

//Questão 31
function moveDiv(){
    let div = document.getElementById("divImg");
    div.style.lef += "10px";
}
let andar = 3;
let troca = 0;
function animaImagens(){

    setTimeout(trocaImagem, 200, troca);
    troca++
    if(troca == 3){troca = 0;}
    andar += 5;    
}
function trocaImagem(imgId){
    document.getElementById('imgUrso').src = "../imagens/urso"+imgId+".png";
    let div = document.getElementById("divImg");
    div.style.left = andar+"px";
}

//Questão 32
function excluirItem(){
 alert("Vai Brasil!!")
}