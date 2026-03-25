localStorage.setItem("paginaAnterior", window.location.href);
  document.addEventListener("DOMContentLoaded", () => {
    const atual = window.location.href;
    const ultima = localStorage.getItem("paginaAtual");
    if (ultima && ultima !== atual) {
        localStorage.setItem("paginaAnterior", ultima);
    }
    localStorage.setItem("paginaAtual", atual);
});