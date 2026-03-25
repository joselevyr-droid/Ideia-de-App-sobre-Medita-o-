window.addEventListener("load", () => {
  const usuario = localStorage.getItem("usuarioLogado");
  const fotoSalva = localStorage.getItem("fotoPerfil");
  if (usuario && fotoSalva) {
    fotoUsuario.src = fotoSalva;
  } else {
    fotoUsuario.src = fotoPadrao;
  }
});