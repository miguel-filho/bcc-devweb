const showHora = () => {
    const h = new Date();
    let ans = "";
    res =  h.getDate() + "/" + h.getMonth() + "/" + h.getFullYear() + " " + h.getHours()
    + ":" + h.getMinutes() + ":" + h.getSeconds()
    document.getElementById("resultado").innerHTML = ans;
    setTimeout(showHora, 1)
} 