
const numeros = []

const mostrarLista = () => {
  
    let ans = ""
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            ans = ans + `<li style="color:red;">${numeros[i]}</li>`
        }
        else ans = ans + `<li>${numeros[i]}</li>`
    }
    document.getElementById('numeros').innerHTML = ans
}

const add = () =>{
    let num = parseInt(document.getElementById('numero').value)
    numeros.push(num)
    mostrarLista()
}