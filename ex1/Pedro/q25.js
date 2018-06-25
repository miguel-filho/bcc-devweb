let verifica = () => {
    let chute = parseInt(document.getElementById('numero').value)
    let x = parseInt(Math.random() * 3 + 1)
    if(chute == x) document.body.innerHTML += `<br>${chute} == ${x}`
    else document.body.innerHTML += `<br>${chute} != ${x}`
}