const degrades = [
  "linear-gradient(to bottom, #4e7a68, #7fbfa3)",
  "linear-gradient(to bottom, #b85c5c, #e09a9a)",
  "linear-gradient(to bottom, #5c7eb8, #9ab9e0)",
  "linear-gradient(to bottom, #7a5ca0, #b49ad6)",
  "linear-gradient(to bottom, #d68b5c, #f2b89a)",
  "linear-gradient(to bottom, #333333, #666666)"
];
const temaSalvo = localStorage.getItem("temaAtual");
let temaAtual = temaSalvo !== null ? parseInt(temaSalvo) : 0;
if (isNaN(temaAtual)) temaAtual = 0;
document.body.style.background = degrades[temaAtual];
document.body.classList.add("tema-" + temaAtual);
window.onload = () => {
  document.getElementById("btnPix").onclick = () => {
    alert("Você escolheu Pix");
  };
  document.getElementById("btnCartao").onclick = () => {
    alert("Você escolheu Cartão");
  };
};
const popup = document.getElementById("popupPagamento");
function processarPagamento() {
  popup.classList.add("ativo");
  setTimeout(() => {
    const usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
      let pagantes = JSON.parse(localStorage.getItem("pagantes")) || [];
      if (!pagantes.includes(usuario)) {
        pagantes.push(usuario);
        localStorage.setItem("pagantes", JSON.stringify(pagantes));
      }
    }
    popup.classList.remove("ativo");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 400);
  }, 2000); 
}
window.onload = () => {
  document.getElementById("btnPix").onclick = processarPagamento;
  document.getElementById("btnCartao").onclick = processarPagamento;
};