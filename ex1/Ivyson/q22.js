function Tabuada(){

    let tbody = document.getElementById('resultado')

    for (let i = 0; i < 11; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < 11; j++) {
            let td = document.createElement('td')
            td.innerHTML =  i + "X" + j + " = " + (i*j)
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }

}