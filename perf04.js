  const btnFoto = document.getElementById("btnFoto");
const inputFoto = document.getElementById("inputFoto");
btnFoto.addEventListener("click", () => {
  inputFoto.click();
});
inputFoto.addEventListener("change", () => {
  const file = inputFoto.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const base64 = e.target.result;
      localStorage.setItem("fotoPerfil", base64);
      fotoPerfil2.src = base64;
    };
    reader.readAsDataURL(file);
  }
});