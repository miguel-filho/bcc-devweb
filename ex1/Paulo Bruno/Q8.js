function remover_pontuacao() {
  const cpf= document.getElementById('txtCPF').value
  if (cpf.length==14) {
    document.getElementById('txtCPF').value = cpf.replace(/[-.]/g,"")
  }
}
