document.addEventListener("DOMContentLoaded", function () {
  const monthsBR = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const tableDays = document.getElementById("dias");
  function GetDaysCalendar(mes, ano) {
    document.getElementById("mes").innerHTML = monthsBR[mes];
    document.getElementById("ano").innerHTML = ano;

    let firstDayOfweek = new Date(ano, mes, 1).getDay() - 1;
    let getLastDaythisMonth = new Date(ano, mes + 1, 0).getDate();

    for (
      var i = -firstDayOfweek, index = 0;
      i < 42 - firstDayOfweek;
      i++, index++
    ) {
      let dt = new Date(ano, mes, i);
      let dtNow = new Date();
      let dayTable = tableDays.getElementsByTagName("td")[index];
      dayTable.classList.remove("mes-anterior");
      dayTable.classList.remove("prx-mes");
      dayTable.classList.remove("dia-atual");
      dayTable.classList.remove("event");
      dayTable.innerHTML = dt.getDate();

      if (
        dt.getFullYear() == dtNow.getFullYear() &&
        dt.getMonth() == dtNow.getMonth() &&
        dt.getDate() == dtNow.getDate()
      ) {
        dayTable.classList.add("dia-atual");
      }
      if (i < 1) {
        dayTable.classList.add("mes-anterior");
      }
      if (i > getLastDaythisMonth) {
        dayTable.classList.add("prx-mes");
      }
    }
  }

  let now = new Date();
  let mes = now.getMonth();
  let ano = now.getFullYear();
  GetDaysCalendar(mes, ano);

  const butao_proximo = document.getElementById("btn_prx");
  const butao_anterior = document.getElementById("btn_ant");

  butao_proximo.onclick = function () {
    if (mes < 11) {
      mes++;
    }
    if (mes > 11) {
      mes = 0;
      ano++;
    }
    GetDaysCalendar(mes, ano);
  };

  butao_anterior.onclick = function () {
    if (mes > 5 && ano == 2023) {
      mes--;
    }
    if (mes > 0 && ano > 2023) {
      mes--;
    }
    GetDaysCalendar(mes, ano);
  };
  const ano_proximo = document.getElementById("ano_prx");
  const ano_anterior = document.getElementById("ano_ant");
  const tst = document.getElementById("tst");

  ano_proximo.onclick = function () {
    ano++;
    GetDaysCalendar(mes, ano);
  };
  ano_anterior.onclick = function () {
    if (ano > 2023) {
      ano--;
    }
    if (ano == 2023 && mes < 5) {
      mes = 5;
    }
    GetDaysCalendar(mes, ano);
  };
});
