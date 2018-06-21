verifica = () =>{
    let ano = parseInt(document.getElementById("ano").value)
    let idade = 2018 - ano
    let ans = ""
    if(idade >= 18) ans = "Maior de idade!"
    else ans = "Menor de idade"
    document.body.innerHTML +="<br>" +  ans 
}