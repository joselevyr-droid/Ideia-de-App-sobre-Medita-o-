  const player = document.getElementById("videoPlayer");
  const cards = document.querySelectorAll(".video-card");
  const iframe = document.getElementById("ytPlayer");
  const topo = document.querySelector(".topo");
  const popupTitulo = document.getElementById("popupTitulo");
  const popupInfo = document.getElementById("popupInfo");
  const likeBtn = document.getElementById("likeBtn");
  let videoAtual = null;
  let startY = 0;
  let currentY = 0;
  let isDragging = false;
  cards.forEach(card => {
  card.addEventListener("click", () => {
    videoAtual = card.getAttribute("data-id");
    mostrarTodos = false;
    renderComentarios();
    audioGlobal.pause();
    let curtidas = JSON.parse(localStorage.getItem("curtidas")) || {};
if (curtidas[videoAtual]) {
  likeBtn.textContent = "❤️ Curtido";
} else {
  likeBtn.textContent = "🤍 Curtir";
}
    let videoURL = card.getAttribute("data-video");
    let titulo = card.getAttribute("data-titulo");
    let canal = card.getAttribute("data-canal");
    let views = card.getAttribute("data-views");
    let videoID = videoURL.split("youtu.be/")[1].split("?")[0];
    let embedURL = `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&playsinline=1&rel=0&enablejsapi=1&origin=${window.location.origin}`;
    iframe.src = embedURL;
    popupTitulo.textContent = titulo;
    popupInfo.textContent = `${canal} • ${views}`;
    player.classList.add("active");
    topo.classList.add("oculto");
    renderRelacionados();
  });
});
  function fecharPlayer() {
    player.classList.remove("active");
    topo.classList.remove("oculto");
    audioGlobal.play().catch(() => {});
    setTimeout(() => {
      iframe.src = ""; 
      player.style.transform = "";
    }, 400);
  }
  player.addEventListener("touchstart", (e) => {
    if (!e.target.classList.contains("drag-area")) return;
    isDragging = true;
    startY = e.touches[0].clientY;
  });
  player.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    let diff = currentY - startY;
    if (diff > 0) {
      player.style.transform = `translateY(${diff}px)`;
    }
  });
  player.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    let diff = currentY - startY;
    if (diff > 150) {
      fecharPlayer();
    } else {
      player.style.transform = "";
    }
  });
  const listaRelacionados = document.querySelector(".lista-relacionados");
function fecharPlayer(callback) {
  player.classList.remove("active");
  topo.classList.remove("oculto");
  audioGlobal.play().catch(() => {});
  setTimeout(() => {
    iframe.src = ""; 
    player.style.transform = "";
    if (typeof callback === "function") callback(); 
  }, 400);
}
function renderRelacionados() {
  listaRelacionados.innerHTML = ""; 
  const todosVideos = Array.from(document.querySelectorAll(".video-card"));
  todosVideos.forEach(card => {
    const id = card.getAttribute("data-id");
    if (id === videoAtual) return; 
    const titulo = card.getAttribute("data-titulo");
    const thumb = card.querySelector(".thumb").src;
    const div = document.createElement("div");
    div.className = "relacionado-card";
    div.innerHTML = `
      <img src="${thumb}">
      <div class="titulo">${titulo}</div>
    `;
    div.addEventListener("click", () => {
      fecharPlayer(() => {
        const originalCard = document.querySelector(`.video-card[data-id="${id}"]`);
        if (originalCard) originalCard.click();
      });
    });
    listaRelacionados.appendChild(div);
  });
}
const btnFechar = document.getElementById("btnFecharPlayer");
btnFechar.addEventListener("click", () => {
    fecharPlayer();
});