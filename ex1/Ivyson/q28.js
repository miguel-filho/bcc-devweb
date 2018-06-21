let ul = document.createElement("ul")
ul.id = "nomes"
document.body.appendChild(ul)
let nomes = []
let ocorrencias = {}

function adapter(obj) {
    return Object.keys(obj).map(function(key) {
        return {
            key: key,
            value: obj[key]
        }
    }).sort(function(a, b) {
        return b.value - a.value
    })
}
function add(){
    ul.innerHTML = ''
    let value = document.getElementById("nome").value
    
    nomes.push(value)

    if (!ocorrencias[value])
        ocorrencias[value] = 1
    else
        ocorrencias[value]++
    
    adapter(ocorrencias).forEach(function(palavra) {
        let li = document.createElement("li")
        li.textContent = palavra.key + " " + palavra.value
        ul.appendChild(li)
    })
}