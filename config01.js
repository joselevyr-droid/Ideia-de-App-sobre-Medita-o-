const btnVoltar = document.getElementById("btnVoltar");
const temaSelector = document.getElementById("temaSelector");
const musicaSelector = document.getElementById("musicaSelector");
const setaEsq = document.getElementById("setaEsq");
const setaDir = document.getElementById("setaDir");
const setaMusicaEsq = document.getElementById("setaMusicaEsq");
const setaMusicaDir = document.getElementById("setaMusicaDir");
const volumeControl = document.getElementById("volumeControl");
const audioGlobal = document.getElementById("musicaGlobal");
btnVoltar.addEventListener("click", () => {
    const paginaAnterior = localStorage.getItem("paginaAnterior") || "";
    if (paginaAnterior.includes("perfil.html")) {
        window.location.href = "index.html";
    } else if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
});
const temas = [
  { nome: "Verde", cor: "#4e7a68" },
  { nome: "Vermelho", cor: "#b85c5c" },
  { nome: "Azul", cor: "#5c7eb8" },
  { nome: "Roxo", cor: "#7a5ca0" },
  { nome: "Laranja", cor: "#d68b5c" },
  { nome: "Preto", cor: "#333333" }
];
const degrades = [
  "linear-gradient(to bottom, #4e7a68, #7fbfa3)",
  "linear-gradient(to bottom, #b85c5c, #e09a9a)",
  "linear-gradient(to bottom, #5c7eb8, #9ab9e0)",
  "linear-gradient(to bottom, #7a5ca0, #b49ad6)",
  "linear-gradient(to bottom, #d68b5c, #f2b89a)",
  "linear-gradient(to bottom, #333333, #666666)"
];
let temaAtual = parseInt(localStorage.getItem("temaAtual")) || 0;
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${alpha})`;
}
function atualizarBarraVolume() {
  volumeControl.style.background = `linear-gradient(to right, 
    ${temas[temaAtual].cor} ${volumeControl.value * 100}%, 
    rgba(0,0,0,0.2) ${volumeControl.value * 100}%)`;
}
function atualizarTema() {
  temaSelector.style.backgroundColor = temas[temaAtual].cor;
  musicaSelector.style.backgroundColor = hexToRgba(temas[temaAtual].cor, 0.3);
  document.body.style.background = degrades[temaAtual];
  btnVoltar.style.background = temaAtual === 5 ? "#666" : temas[temaAtual].cor;
  localStorage.setItem("temaAtual", temaAtual);
  const style = document.getElementById("thumb-style") || document.createElement("style");
  style.id = "thumb-style";
  style.innerHTML = `
    #volumeControl::-webkit-slider-thumb {
      border: 3px solid ${temas[temaAtual].cor};
    }
    #volumeControl::-moz-range-thumb {
      border: 3px solid ${temas[temaAtual].cor};
    }
  `;
  document.head.appendChild(style);
  atualizarBarraVolume();
}
setaDir.addEventListener("click", () => {
  temaAtual = (temaAtual + 1) % temas.length;
  atualizarTema();
});
setaEsq.addEventListener("click", () => {
  temaAtual = (temaAtual - 1 + temas.length) % temas.length;
  atualizarTema();
});
const musicas = [
  { nome: "Hi", src: "https://gregarious-lollipop-5e2115.netlify.app//Hi.mp3" },
  { nome: "Goodnight", src: "https://gregarious-lollipop-5e2115.netlify.app/goodni.mp3" },
  { nome: "Just Friends", src: "https://gregarious-lollipop-5e2115.netlify.app/justfriend.mp3" },
  { nome: "Only", src: "https://gregarious-lollipop-5e2115.netlify.app/only.mp3" }
];
musicas.forEach(m => {
  const a = new Audio(m.src);
  a.preload = "auto";
});
let musicaAtual = parseInt(localStorage.getItem("musicaAtual")) || 0;
audioGlobal.src = musicas[musicaAtual].src;
let audioAtivado = false;
function ativarAudio() {
  if (!audioAtivado) {
    audioAtivado = true;
    audioGlobal.play().catch(() => {
      audioAtivado = false;
    });
  }
}
document.addEventListener("click", ativarAudio);
document.addEventListener("touchstart", ativarAudio);
function atualizarMusica(){
  musicaSelector.textContent = musicas[musicaAtual].nome;
  localStorage.setItem("musicaAtual", musicaAtual);
  localStorage.setItem("musicaGlobal", musicas[musicaAtual].src);
  audioGlobal.src = musicas[musicaAtual].src;
  if(audioAtivado) audioGlobal.play();
}
setaMusicaDir.addEventListener("click", () => {
  musicaAtual = (musicaAtual + 1) % musicas.length;
  atualizarMusica();
});
setaMusicaEsq.addEventListener("click", () => {
  musicaAtual = (musicaAtual - 1 + musicas.length) % musicas.length;
  atualizarMusica();
});
let volumeSalvo = localStorage.getItem("volumeGlobal");
if (volumeSalvo === null) volumeSalvo = 0.5;
audioGlobal.volume = parseFloat(volumeSalvo);
volumeControl.value = volumeSalvo;
volumeControl.addEventListener("input", () => {
  audioGlobal.volume = volumeControl.value;
  localStorage.setItem("volumeGlobal", volumeControl.value);
  atualizarBarraVolume();
});
atualizarMusica();
atualizarTema();
atualizarBarraVolume();