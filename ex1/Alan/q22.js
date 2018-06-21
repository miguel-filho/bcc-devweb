
    var Tabuada = "<h1>Tabuada em JavaScript</h1>";
    document.write(Tabuada);
    for (var i = 0; i < 11; i++) {
    document.write("<br />[Tabuada de " + i + "]<br /><br />");
    for (var j = 0; j < 11; j++) {
     document.write(i + " x " + j + " = " + i * j + "<br />");
    }}