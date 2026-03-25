let temaAtual = parseInt(localStorage.getItem("temaAtual")) || 0;
const coresTemas = [
  {
    fundo: "#ffffff",
    barra: "#e6e6e6",
    texto: "#777",
    linhas: "#7fbfa3",
    linhasSec: "#4e7a68",
    bgSite: "#ffffff"
  },
  {
    fundo: "#ffe6e6",
    barra: "#f2c2c2",
    texto: "#555",
    linhas: "#b85c5c",
    linhasSec: "#e09a9a",
    bgSite: "#ffe6e6"
  },
  {
    fundo: "#e6f0ff",
    barra: "#c2d9f2",
    texto: "#555",
    linhas: "#5c7eb8",
    linhasSec: "#9ab9e0",
    bgSite: "#e6f0ff"
  },
  {
    fundo: "#f0e6ff",
    barra: "#d6c2f2",
    texto: "#555",
    linhas: "#7a5ca0",
    linhasSec: "#b49ad6",
    bgSite: "#f0e6ff"
  },
  {
    fundo: "#fff0e6",
    barra: "#f2d6c2",
    texto: "#555",
    linhas: "#d68b5c",
    linhasSec: "#f2b89a",
    bgSite: "#fff0e6"
  },
  {
    fundo: "#333333",
    barra: "#555555",
    texto: "#fff",
    linhas: "#666666",
    linhasSec: "#999999",
    bgSite: "#333333"
  }
];
function aplicarTema() {
  const tema = coresTemas[temaAtual];
  const root = document.documentElement;
  root.style.setProperty("--cor-fundo", tema.fundo);
  root.style.setProperty("--cor-barra", tema.barra);
  root.style.setProperty("--cor-texto", tema.texto);
  root.style.setProperty("--cor-linhas", tema.linhas);
  root.style.setProperty("--cor-linhas-sec", tema.linhasSec);
  root.style.setProperty("--bg-site", tema.bgSite);
  document.querySelectorAll(".btn-audio, .btn-fechar").forEach(el => {
    el.style.backgroundColor = tema.barra;
    el.style.color = tema.texto;
  });
}
aplicarTema();
const fotosTema = [
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/28%20Sem%20T%C3%ADtulo_20260321172415.png", // tema 0
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170334.png", // tema 1
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170406.png", // tema 2
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170509.png", // tema 3
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170354.png", // tema 4
  "https://raw.githubusercontent.com/joselevyr-droid/Ideia-de-App-sobre-Medita-o-/refs/heads/Graphics/1%20Sem%20T%C3%ADtulo_20260323170524.png"  // tema 5
];
const fotoUsuarioIndex = document.getElementById("fotoUsuario");
if (fotoUsuarioIndex) {
  fotoUsuarioIndex.src = fotosTema[temaAtual] || fotosTema[0];
}