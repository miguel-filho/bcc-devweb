let select = document.createElement("select")
select.id = "select"
select.size = "10"
document.body.appendChild(select)
let nomes = []
function add(){
   select.innerHTML = ''
    nomes.push(document.getElementById("nome").value)
    nomes = nomes.sort()
    for (let i in nomes) {
        let option = document.createElement("option")
        option.innerHTML = nomes[i]
        select.appendChild(option)
    }

}
function excluir(){
    let x = select.options[select.selectedIndex].value
    select.options.remove(select.selectedIndex)
    console.log(x)
}