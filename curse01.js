const menuBtn = document.getElementById("menuBtn");
const popup = document.getElementById("popupMenu");
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.style.display = popup.style.display === "block" ? "none" : "block";
});
popup.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", () => {
  popup.style.display = "none";
});
const cards = document.querySelectorAll(".video-card");
const player = document.getElementById("player");
const iframe = document.getElementById("iframe");
cards.forEach(card => {
  card.onclick = () => {
    const id = card.dataset.video;
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    player.classList.add("active");
  };
});
document.getElementById("fechar").onclick = () => {
  player.classList.remove("active");
  iframe.src = "";
};
const foto = document.getElementById("fotoUsuario");
const fotoSalva = localStorage.getItem("fotoPerfil");
if (fotoSalva) {
  foto.src = fotoSalva;
}
foto.onclick = () => {
  window.location.href = "perfil.html";
};
const degrades = [
  "linear-gradient(to bottom, #4e7a68, #7fbfa3)",
  "linear-gradient(to bottom, #b85c5c, #e09a9a)",
  "linear-gradient(to bottom, #5c7eb8, #9ab9e0)",
  "linear-gradient(to bottom, #7a5ca0, #b49ad6)",
  "linear-gradient(to bottom, #d68b5c, #f2b89a)",
  "linear-gradient(to bottom, #333333, #666666)"
];
let temaAtual = parseInt(localStorage.getItem("temaAtual"));
if (isNaN(temaAtual)) temaAtual = 0;
document.body.style.background = degrades[temaAtual];
const overlayEscuro = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))";
document.documentElement.style.setProperty(
  "--bg-player",
  `${overlayEscuro}, ${degrades[temaAtual]}`
);