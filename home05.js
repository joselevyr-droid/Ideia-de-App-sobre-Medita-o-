likeBtn.addEventListener("click", () => {
  let curtidas = JSON.parse(localStorage.getItem("curtidas")) || {};

  if (curtidas[videoAtual]) {
    delete curtidas[videoAtual];
    likeBtn.textContent = "🤍 Curtir";
  } else {
    curtidas[videoAtual] = true;
    likeBtn.textContent = "❤️ Curtido";
  }

  localStorage.setItem("curtidas", JSON.stringify(curtidas));
});