window.onload = setInterval(horario, 1000);

function horario() {
  var relogio = document.querySelector("#relogio");
  var d = new Date();
  var seg = d.getSeconds();
  var min = d.getMinutes();
  var hora = d.getHours();
  var dia = d.getDate();
  var mes = (d.getMonth() < 9 ? '0': '') + (d.getMonth()+1);
  var ano = d.getFullYear()
  var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var diaatual = d.getDay();
  var Semana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

  relogio.innerHTML = Semana[diaatual] + ", " + dia + "/" + mes + "/" + ano + " " + hora + ":" + min + ":" + seg;
}