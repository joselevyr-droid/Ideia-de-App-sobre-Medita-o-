const videos = document.querySelectorAll(".video-card");

  window.addEventListener("load", () => {
    videos.forEach((video, i) => {
      setTimeout(() => {
        video.classList.add("mostrar");
      }, 600 + i * 150); // atraso inicial + efeito em cascata
    });
  });