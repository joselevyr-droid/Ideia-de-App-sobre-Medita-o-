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
const btn = document.getElementById("enviar");
const popup = document.getElementById("popup");
btn.onclick = () => {
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("mensagem").value.trim();
  if (!email || !msg) {
    alert("Preencha tudo!");
    return;
  }
  let mensagens = JSON.parse(localStorage.getItem("suporteMensagens")) || [];
  mensagens.push({
    email,
    mensagem: msg,
    data: new Date().toLocaleString()
  });
  localStorage.setItem("suporteMensagens", JSON.stringify(mensagens));
  popup.classList.add("ativo");
  setTimeout(() => {
    popup.classList.remove("ativo");
  }, 2000);
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";
};