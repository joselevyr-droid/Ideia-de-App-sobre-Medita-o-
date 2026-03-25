const popupAviso = document.getElementById("avisoPopup");
const btnAviso = document.getElementById("fecharAviso");

if (localStorage.getItem("avisoVisto")) {
  popupAviso.style.display = "none";
}

btnAviso.addEventListener("click", () => {
  localStorage.setItem("avisoVisto", "true");
  popupAviso.style.display = "none";
});

