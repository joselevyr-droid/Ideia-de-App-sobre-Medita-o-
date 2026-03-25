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
document.body.classList.add("tema-" + temaAtual);
let codigoGerado = null;
document.getElementById("enviarCodigo").onclick = () => {
  const email = document.getElementById("email").value.trim();
  if (!email) {
    alert("Digite um email!");
    return;
  }
  codigoGerado = Math.floor(100000 + Math.random() * 900000);
  console.log("Código gerado (debug):", codigoGerado);
  alert("Código enviado! (mentira)");
};
document.getElementById("validarCodigo").onclick = () => {
  const codigo = document.getElementById("codigo").value.trim();
  if (!codigo) {
    alert("Digite o código!");
    return;
  }
  if (codigo == codigoGerado) {
    alert("Código correto! (simulação)");
  } else {
    alert("Código inválido!");
  }
};