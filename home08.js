const audioGlobal = document.getElementById("musicaGlobal");
const urlPadrao = "https://gregarious-lollipop-5e2115.netlify.app/Hi.mp3";
let musicaSalva = localStorage.getItem("musicaGlobal");
audioGlobal.src = musicaSalva || urlPadrao;
let volumeSalvo = localStorage.getItem("volumeGlobal");
if (volumeSalvo === null) volumeSalvo = 0.5;
audioGlobal.volume = parseFloat(volumeSalvo);
let ativado = false;
document.addEventListener("click", (e) => {
    if (!ativado) {
        if (e.target.closest(".video-card")) return;
        ativado = true;
        audioGlobal.play().catch(() => {});
    }
});
function mudarAudio(urlNova) {
    const estavaTocando = !audioGlobal.paused;
    audioGlobal.src = urlNova;
    localStorage.setItem("musicaGlobal", urlNova);
    if (estavaTocando) {
        audioGlobal.play().catch(() => {});
    }
}
function definirVolume(novoVolume) {
    if (novoVolume < 0) novoVolume = 0;
    if (novoVolume > 1) novoVolume = 1;
    audioGlobal.volume = novoVolume;
    localStorage.setItem("volumeGlobal", novoVolume);
}
function pausarAudio() {
    audioGlobal.pause();
}
function tocarAudio() {
    audioGlobal.play().catch(() => {});
}