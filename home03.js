  const barra = document.querySelector(".barra-pesquisa");
  const input = barra.querySelector("input");

  input.addEventListener("focus", () => {
    barra.classList.add("ativa");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      barra.classList.remove("ativa");
    }
  });