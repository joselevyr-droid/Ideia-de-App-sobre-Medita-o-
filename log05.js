const btnVoltar = document.getElementById("btnVoltar");
btnVoltar.addEventListener("click", () => {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
});