  const fotoPerfil = document.querySelector(".perfil");
fotoPerfil.addEventListener("click", () => {
    const usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
        window.location.href = "perfil.html";
    } else {
        window.location.href = "login.html";
    }
});