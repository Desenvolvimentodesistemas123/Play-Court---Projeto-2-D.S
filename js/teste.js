var btn = document.querySelector(".horarios");

var container = document.querySelector(".containerREDONDO");

btn.addEventListener("click", function () {
  if (container.style.display === "block") {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
});
