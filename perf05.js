const btnVoltar = document.getElementById("btnVoltar");
btnVoltar.addEventListener("click", () => {
  const voltarPara = localStorage.getItem("paginaAnterior");
  if (voltarPara) {
    window.location.href = voltarPara;
  } else {
    window.location.href = "index.html";
  }
});