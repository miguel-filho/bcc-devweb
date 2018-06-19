function calc(){
    let v1 = parseFloat(document.getElementById("v1").value)
    let resp = v1*0.05
    document.getElementById("resp").value = resp.toString()
    //alert (" 5% de desconto do valor "+ v1+ " é = " + resp)
}