// QUESTÃO 1
function q1ShowMsg(){
    alert("Olá Mundo!!!")
}
/*
window.onload = q1ShowMsg
*/

// QUESTÃO 2
function q2ShowMsg(){
    alert("Olá Mundo!!!")
}
/*
window.onload = q2ShowMsg
*/

// QUESTÃO 3
function q3Calc(){
    let v1 = document.getElementById("q3v1").value
    let v2 = document.getElementById("q3v2").value
    let v1Split = v1.split(",")
    let v2Split = v2.split(",")
    let resp = Math.sqrt( (Math.pow((v1Split[0] - v2Split[0]),2)) + (Math.pow((v1Split[1] - v2Split[1]),2)))
    document.getElementById("q3Resp").value = resp
}
// QUESTÃO 4
function q4Print(){
    let nome = document.getElementById("q4Nc").value
    alert(nome)
}

// QUESTÃO 5
q5Lista = []
function q5Add(){
    document.getElementById("q5res").innerHTML = ""
    let nome = document.getElementById("q5N").value
    let tam = nome.length
    let res = `Nome: '${nome}' - > Lenght: ${tam}`
    q5Lista.push(res)
    for (let i = 0; i<q5Lista.length;i++){
        document.getElementById("q5res").innerHTML += q5Lista[i] + '</br>'
    }
}
// QUESTÃO 6
    function q6Up(){
    
        let up = document.getElementById("q6Img")
        if (up.src.endsWith("lampada.jpg"))
            up.src = "../imagens/lampada-on.jpg"
        else
            up.src = "../imagens/lampada.jpg"
    }

// QUESTÂO 7

    function q7Up(){
        console.log("haushuas")
        let up = document.getElementById("q7Img")
        if (up.src.endsWith("lampada.jpg"))
            up.src ="../imagens/lampada-on.jpg"
        else
            up.src = "../imagens/lampada.jpg"
    }

// QUESTÃO 8

    function q8Cpf() {
        let input = document.getElementById("cpf")
        let valor = input.value

        if (valor.match(/[0-9]/g).length > 11)
            valor = valor.substring(0, valor.split().reduce(function(anterior, atual, index) {
                if (anterior.done)
                    return anterior
                if (/[0-9]/.test(atual))
                    anterior.value++
                if (anterior.value == 11) {
                    anterior.done = true
                    anterior.value = index+1
                }
                return anterior
            }, {done: false, value: 0}).value)

        if (valor.match(/[0-9]/g).length >= 11)
            value = valor.replace(/[^0-9]/g, '')
        input.value = value
    }

// QUESTÃO 9

function q9Cpf() {
    
    let input = document.getElementById("cpf")
    let valor = input.value
    if (valor.length == 3){
        valor = valor.substring(0,3) + "." + valor.substring(3)
    }
    if (valor.length == 7){
        valor = valor.substring(0,7) + "." + valor.substring(7)
    }
    if (valor.length == 11){
        valor = valor.substring(0,11) + "-" + valor.substring(11)
    }
    input.value = valor
}

// QUESTÃO 10
function q10Soma(){
    let v1 = parseFloat(document.getElementById("v1").value)
    let v2 = parseFloat(document.getElementById("v2").value)
    let soma = (v1+v2)
    document.getElementById("res").value = soma
}

// QUESTÃO 11
function q11Bttv(){
    document.body.style.backgroundColor = '#00FF00'
}
function q11Btta(){
    document.body.style.backgroundColor = '#FFFF00'
}

// QUESTÃO 12
function q12Msg(){
    document.getElementById("res").innerHTML = "Essa mensagem veio do JavaScript..."
}
/*
window.onload = q12Msg
*/
// QUESTÃO 13
function q13Msg(){
    document.getElementById("res").innerHTML = "Esse texto foi inserido através do evento de clique"
}

// QUESTÃO 14
function q14getValores(id){
    let valorID = document.getElementById(id).value
    return valorID
}

function q14validar(v){
    return !isNaN(v) && v !=""
}

function q14Calc(){
    let base = q14getValores("base")
    let exp = q14getValores("exp")
    if(q14validar(base) && q14validar(exp)){
       // base = parseFloat(base)
       // exp = parseFloat(exp)
        let pot = Math.pow(base,exp)
        document.getElementById("res").value = pot
    }
    else
        document.getElementById("res").value = "Valores Invalidos"
}

// QUESTÃO 15
function q15getValores(id){
    let valoresID = document.getElementById(id).value
    return valoresID
}

function q15Calc(){
    let v1 = q15getValores("v1")
    let v2 = q15getValores("v2")
    if (q14validar(v1) && q14validar(v2)){
        v1 = parseFloat(v1)
        v2 = parseFloat(v2)
        let soma = (v1+v2)
        document.getElementById("res").value = soma
    }
    else
        document.getElementById("res").value = "0"
}

// QUESTÃO 16

function q16Calc(){
    let v1 = document.getElementById("v1").value
    v1 = parseFloat(v1)
    if (q14validar(v1)){
        if (v1%2 == 0)
        document.getElementById("res").value = "Par"
        else
        document.getElementById("res").value = "Impar"
    }
    else
        document.getElementById("res").value = "Valor Inválido"
}

// QUESTÃO 17

function q17Calc(){
    let x17 = q15getValores("v1")
    if (q14validar(x17)){
        x17 = (parseFloat(x17)) *0.05
        document.getElementById("res").value = x17
    }
    else{
        document.getElementById("res").value = "Valor inválido"
    }   
}

// QUESTÃO 18

function q18Calc(){{
    let x18 = q15getValores("v1")
    if (q14validar(x18)){
        let ano = new Date().getFullYear()
        ano = ano - x18
        if(ano >= 18)
            document.getElementById("res").value = `Maior de idade: ${ano} anos`
        else
        document.getElementById("res").value = `Menor de idade: ${ano} anos`
    }
    else{
        document.getElementById("res").value = "Valor inválido"
    }   
}
}

// QUESTÃO 19
function q19Print(){
    for (let i=0;i<20;i++)
        document.getElementById("resultado").innerHTML += "Repetindo 20x <br />"
}
//window.onload = q19Print

// QUESTÃO 20
function q20Print(){
    for (let i=0;i<=100;i++)
        document.getElementById("resultado").innerHTML += i + "<br />"
}
//window.onload = q20Print

// QUESTÃO 21
function q21Print(){
    for (let i=0;i<=500;i++)
        if(i%2==0)
            document.getElementById("resultado").innerHTML += i + "<br />"
}
//window.onload = q21Print

// QUESTÃO 22
function q22Print(){
    let saida = "";
    for (let i = 0; i <= 10; i++) {
        for(let j = 0; j <= 10; j++){
            saida += i+" x "+j+" = "+(i*j)+ "<br>";
        }   
        saida += "<br>"
    }
    document.getElementById("resultado").innerHTML = saida;
}
//window.onload = q22Print

// QUESTÃO 23
let q23Lista = []
function q23Show(){
    document.getElementById("resultado").innerHTML = ""
    let frase = document.getElementById("v1").value;
    let flag = false;
    if(frase.search('Dota') != -1){
        flag = true
        q23Lista.push(`${frase} ... (${flag})`)
    }
    else{
        flag = false
        q23Lista.push(`${frase} ... (${flag})`)
    }
    for (let i = 0; i<q23Lista.length;i++){
        document.getElementById("resultado").innerHTML += q23Lista[i] + "<br />" ;
    }
}

// QUESTÃO 24
function q24Show(){
    alert(Math.floor(Math.random() * 10) + 1)
}
//window.onload = q24Show

// QUESTÃO 25
let q25Lista = []
function q25Show(){
    document.getElementById("resultado").innerHTML = ""
    let n = parseFloat(document.getElementById("v1").value)
    let a = parseInt(Math.floor(Math.random() * 3) + 1)
    if(n == a){
        q25Lista.push(`Numero digitado ${n} IGUAL ao numero gerado ${a}`)
        for(let i=0;i<q25Lista.length;i++){
            document.getElementById("resultado").innerHTML += q25Lista[i] + "<br / >"
        }
    }
    else{
        q25Lista.push(`Numero digitado ${n} DIFERENTE do numero gerado ${a}`)
        for(let j=0;j<q25Lista.length;j++){
            document.getElementById("resultado").innerHTML += q25Lista[j] + "<br / >"
        }
    }
}

// QUESTÃO 26

function q26Show(){
    const h = new Date();
    let res = "";
    res =  h.getDate() + "/" + h.getMonth() + "/" + h.getFullYear() + " " + h.getHours()
    + ":" + h.getMinutes() + ":" + h.getSeconds()
    document.getElementById("resultado").innerHTML = res;
    setTimeout(q26Show, 1)
}
// window.onload = q26Show

// QUESTÃO 27

function show(){
    array.sort((a,b) => {
        let x1 = a.toLowerCase()
        let x2 = b.toLowerCase()
        if (x1 > menor) return -1
        if (x2 > menor) return 1
        return 0

    })

    let resp =""
    for (let i=0;i<array.length;i++)
        resp += `<li>${array[i]}</li>`
    document.getElementById("lista").innerHTML = resp
}
let array = [];
function q27Listar(){
    let v = document.getElementById("v1").value
    array.push(v)
    show()
}

// QUESTÃO 28
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
    
// QUESTÃO 29

function q29Show(){
    q29Array.sort()
    let resp =""
    for (let i=0;i<q29Array.length;i++){
        if (q29Array[i]%2 == 0){
            resp += `<li style = "color: #33F;">${q29Array[i]}</li>`
        }
        else
            resp += `<li>${q29Array[i]}</li>`
    }
        
    document.getElementById("lista").innerHTML = resp
}
let q29Array = [];
function q29Listar(){
    let v = parseInt(document.getElementById("v1").value)
    q29Array.push(v)
    q29Show()
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
//window.onload = dispara

//Questão 31



//Questao 32
