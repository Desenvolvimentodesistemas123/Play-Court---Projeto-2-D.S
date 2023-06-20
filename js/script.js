function mostrarDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

function mostrarCalculo() {
  var div = document.getElementById("saldoNovo");
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}

function mostrarDiv(div) {
  var divs = document.getElementsByClassName("conteudo");

  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }

  document.getElementById("aviso" + div).style.display = "flex";
}

var diaAtual = 1;
var totalDias = 3;

function exibirDia(dia) {
  for (var i = 1; i <= totalDias; i++) {
    var divDia = document.getElementById("dia" + i);
    if (i === dia) {
      divDia.style.display = "flex";
    } else {
      divDia.style.display = "none";
    }
  }
}

function anteriorDia() {
  if (diaAtual > 1) {
    diaAtual--;
    exibirDia(diaAtual);
  }
}

function proximoDia() {
  if (diaAtual < totalDias) {
    diaAtual++;
    exibirDia(diaAtual);
  }
}

exibirDia(diaAtual);

