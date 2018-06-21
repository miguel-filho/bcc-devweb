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
        let li1 = document.createElement("li")
        if(i % 2 != 0)
            li.innerHTML = nomes[i]
        else {
            li1.innerHTML = nome[i]
            li1.style.fontWeight = "bold"
        }
        ul.appendChild(li)
    }

}