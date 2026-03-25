function distanciaLevenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}
const barraInput = document.querySelector(".barra-pesquisa input");
barraInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const termo = barraInput.value.trim().toLowerCase();
    const videos = Array.from(document.querySelectorAll(".video-card"));
     if (!termo) {
      videos.forEach(v => v.style.display = "block");
      return;
    }
    const resultados = videos.map(video => {
      const titulo = video.getAttribute("data-titulo").toLowerCase();
      const dist = distanciaLevenshtein(termo, titulo);
      return { video, dist };
    });
    resultados.sort((a, b) => a.dist - b.dist);
    const limite = 3;
    videos.forEach(v => v.style.display = "none");
    resultados.slice(0, limite).forEach(r => r.video.style.display = "block");
  }
});