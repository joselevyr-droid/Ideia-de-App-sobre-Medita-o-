const temas = [
  { nome: "verde", degrade: "linear-gradient(to bottom, #4e7a68, #7fbfa3)" },
  { nome: "vermelho", degrade: "linear-gradient(to bottom, #b85c5c, #e09a9a)" },
  { nome: "azul", degrade: "linear-gradient(to bottom, #5c7eb8, #9ab9e0)" },
  { nome: "roxo", degrade: "linear-gradient(to bottom, #7a5ca0, #b49ad6)" },
  { nome: "laranja", degrade: "linear-gradient(to bottom, #d68b5c, #f2b89a)" },
  { nome: "preto", degrade: "linear-gradient(to bottom, #333333, #666666)" }
];
let temaAtual = parseInt(localStorage.getItem("temaAtual")) || 0;
function aplicarTema(index) {
  temaAtual = index;
  const body = document.body;
  const btnLogin = document.getElementById("btnLogin");
  body.style.background = temas[temaAtual].degrade;
  btnLogin.style.background = temas[temaAtual].degrade;
  localStorage.setItem("temaAtual", temaAtual);
}
aplicarTema(temaAtual);
document.getElementById("setaEsq").addEventListener("click", () => {
  let novo = (temaAtual - 1 + temas.length) % temas.length;
  aplicarTema(novo);
});
document.getElementById("setaDir").addEventListener("click", () => {
  let novo = (temaAtual + 1) % temas.length;
  aplicarTema(novo);
});