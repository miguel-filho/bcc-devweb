var pessoa = new Array();

function OrdenarInvertido() {
    var conv = document.getElementById("nomePessoa");

    conv.value = '';
    pessoa = pessoa.sort();
    pessoa = pessoa.reverse(); 
    document.getElementById("presentes").innerHTML = "";

    for (var i = 0; i < pessoa.length; i++) {
      document.getElementById("presentes").innerHTML += '<li><span id="nome">' + pessoa[i] + '</span> <span onClick="removerPessoa(this);" style="color: red;">[x]</span></li>';
  }

}
function Ordenar() {
    var conv = document.getElementById("nomePessoa");

    conv.value = '';
    pessoa = pessoa.sort();
    document.getElementById("presentes").innerHTML = "";

    for (var i = 0; i < pessoa.length; i++) {
      document.getElementById("presentes").innerHTML += '<li><span id="nome">' + pessoa[i] + '</span> <span onClick="removerPessoa(this);" style="color: red;">[x]</span></li>';
  }

}

function InserePessoa() {
    var conv = document.getElementById("nomePessoa");
    if (conv.value !== '') {
        pessoa.push(conv.value);
        conv.value = '';
        AtualizaLista();
    }
}


function AtualizaLista() {
    if (pessoa.length > 0) {
        document.getElementById("presentes").innerHTML = "";
        pessoa = pessoa.sort();
        for (i = 0; i < pessoa.length; i++) {
            document.getElementById("presentes").innerHTML += '<li><span id="nome">' + pessoa[i] + '</span> <span onClick="removerPessoa(this);" style="color: red;">[x]</span></li>';
        }
    } else {
        document.getElementById("presentes").innerHTML = "Nenhuma pessoa na lista.";
    }
}

function removerPessoa(el) {
    var nome = el.parentNode.firstChild.innerHTML;
    for (i = 0; i < pessoa.length; i++) {
        if(pessoa[i] === nome) {
            pessoa.splice(i, 1);
            AtualizaLista();
        }
    }
}