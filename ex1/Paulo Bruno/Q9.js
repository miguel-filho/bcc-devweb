let contador = 0;
function pontuacao()
{
    let cpf = document.getElementById('txtCPF').value;
    if(contador >= 3 && contador <= 12)
    {
        if(contador == 9)
        {
            document.getElementById('txtCPF').value = cpf + "-";
        }
        else if(contador == 3 || contador == 6)
        {
             document.getElementById('txtCPF').value = cpf + ".";
        }
    }
    contador += 1;
}
