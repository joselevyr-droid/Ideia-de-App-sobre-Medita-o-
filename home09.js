const linkCurso = document.getElementById("linkCurso");
let pagantes = JSON.parse(localStorage.getItem("pagantes")) || [];
linkCurso.addEventListener("click", (e) => {
    e.preventDefault();
    const usuario = localStorage.getItem("usuarioLogado");
    if (!usuario) {
      localStorage.setItem("redirecionarParaCurso", "true");
        window.location.href = "login.html";
        return;
    }
    if (pagantes.includes(usuario)) {
        window.location.href = "curso.html";
    } else {
        window.location.href = "pagamento.html";
    }
});