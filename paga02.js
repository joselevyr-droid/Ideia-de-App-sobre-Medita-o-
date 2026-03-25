const audioGlobal = document.getElementById("musicaGlobal");
let musicaSalva = localStorage.getItem("musicaGlobal") || "https://gregarious-lollipop-5e2115.netlify.app/Hi.mp3";
let volumeSalvo = localStorage.getItem("volumeGlobal");
if (volumeSalvo === null) volumeSalvo = 0.5;
audioGlobal.src = musicaSalva;
audioGlobal.volume = parseFloat(volumeSalvo);
let audioAtivado = false;
function ativarAudioGlobal() {
  if (!audioAtivado) {
    audioAtivado = true;
    audioGlobal.play().catch(() => {
      audioAtivado = false;
    });
  }
}
document.addEventListener("click", ativarAudioGlobal);
document.addEventListener("touchstart", ativarAudioGlobal);