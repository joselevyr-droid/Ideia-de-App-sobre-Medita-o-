const btnVoltar = document.getElementById("btnVoltar");
btnVoltar.addEventListener("click", () => {
    const paginaAnterior = localStorage.getItem("paginaAnterior") || "";
    if (paginaAnterior.includes("perfil.html")) {
        window.location.href = "index.html";
    } else if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
});