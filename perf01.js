const nomeUsuario = document.getElementById("nomeUsuario");
const emailUsuario = document.getElementById("emailUsuario");
const btnLogout = document.getElementById("btnLogout");
const usuario = localStorage.getItem("usuarioLogado");
if (!usuario) {
  window.location.href = "login.html";
} else {
  let nomeSalvo = localStorage.getItem("nomeUsuarioCustom");
  if (!nomeSalvo) nomeSalvo = usuario.split("@")[0];
  nomeUsuario.textContent = nomeSalvo;
  emailUsuario.textContent = usuario;
}
btnLogout.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
});