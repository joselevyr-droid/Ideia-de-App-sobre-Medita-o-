const temaAtual = parseInt(localStorage.getItem("temaAtual")) || 0;
const degradês = [
  "linear-gradient(to bottom, #4e7a68, #7fbfa3)",
  "linear-gradient(to bottom, #b85c5c, #e09a9a)",
  "linear-gradient(to bottom, #5c7eb8, #9ab9e0)",
  "linear-gradient(to bottom, #7a5ca0, #b49ad6)",
  "linear-gradient(to bottom, #d68b5c, #f2b89a)",
  "linear-gradient(to bottom, #333333, #666666)"
];
document.body.style.background = degradês[temaAtual];
document.body.classList.add("tema-" + temaAtual);
const fotosTema = [
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/28%20Sem%20T%C3%ADtulo_20260321172415.png",
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170334.png",
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170406.png",
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170509.png",
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170354.png",
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170524.png"
];
const fotoSalva = localStorage.getItem("fotoPerfil");
if (fotoSalva) {
  fotoPerfil2.src = fotoSalva;
} else {
  fotoPerfil2.src = fotosTema[temaAtual];
}
const editarNome = document.getElementById("editarNome");
const popupNome = document.getElementById("popupNome");
const inputNome = document.getElementById("inputNome");
const salvarNome = document.getElementById("salvarNome");
editarNome.addEventListener("click", () => {
  popupNome.style.display = "flex";
  inputNome.value = nomeUsuario.textContent;
});
salvarNome.addEventListener("click", () => {
  const novoNome = inputNome.value.trim();
  if (novoNome) {
    nomeUsuario.textContent = novoNome;
    localStorage.setItem("nomeUsuarioCustom", novoNome);
  }
  popupNome.style.display = "none";
});
popupNome.addEventListener("click", (e) => {
  if (e.target === popupNome) {
    popupNome.style.display = "none";
  }
});