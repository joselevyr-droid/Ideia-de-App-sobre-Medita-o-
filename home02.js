const menuBtn = document.getElementById("menuBtn");
const popupMenu = document.getElementById("popupMenu");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  popupMenu.classList.toggle("ativo");
});

document.addEventListener("click", () => {
  popupMenu.classList.remove("ativo");
});

popupMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});