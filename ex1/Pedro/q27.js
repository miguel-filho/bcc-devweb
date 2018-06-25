
const names = []

const mostrarLista = () => {
    names.sort((a, b) => {
        aa = a.toLowerCase()
        bb = b.toLowerCase()
        if(aa < bb) return -1
        if(aa > bb) return 1
        return 0
    })
    let ans = ""
    for(let i = 0; i < names.length; i++){
        ans = ans + `<li>${names[i]}</li>`
    }
    document.getElementById('nomes').innerHTML = ans
}

const add = () =>{
    let name = document.getElementById('texto').value
    names.push(name)
    mostrarLista()
}