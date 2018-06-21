let div = document.createElement("div")
div.id = "center"
document.body.appendChild(div)

function data() {
    let now  = new Date()
    div.innerHTML =  now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear() + " " + 
    now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds();
    setTimeout(data, 1)
}

data()