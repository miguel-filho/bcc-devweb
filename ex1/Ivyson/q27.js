let ul = document.createElement("ul")
ul.id = "nomes"
document.body.appendChild(ul)
let nomes = []
function add(){
   ul.innerHTML = ''
    nomes.push(document.getElementById("nome").value)
    nomes = nomes.sort()
    for (let i in nomes) {
        let li = document.createElement("li")
        li.innerHTML = nomes[i]
        ul.appendChild(li)
    }

}