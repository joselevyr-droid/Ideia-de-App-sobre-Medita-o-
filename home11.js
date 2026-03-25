const fotoUsuario = document.getElementById("fotoUsuario");
const usuario = localStorage.getItem("usuarioLogado");
const fotoSalva = localStorage.getItem("fotoPerfil");
const fotoPadrao = fotosTema[temaAtual];
if (usuario && fotoSalva) {
  fotoUsuario.src = fotoSalva;
} else {
  fotoUsuario.src = fotoPadrao;
}