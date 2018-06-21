function calc(){
    let v1 = parseFloat(document.getElementById("v1").value)
    let v2 = parseFloat(document.getElementById("v2").value)
    let resp = Math.pow(v1,v2)
    document.getElementById("resp").value = resp.toString()
    //alert(v1 + " elevado a " + v2 + " = " + resp)
}