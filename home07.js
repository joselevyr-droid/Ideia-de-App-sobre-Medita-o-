const inputComentario = document.getElementById("inputComentario");
const btnEnviar = document.getElementById("btnEnviar");
const listaComentarios = document.getElementById("listaComentarios");
const toggleComentarios = document.getElementById("toggleComentarios");
  toggleComentarios.addEventListener("click", () => {
  mostrarTodos = !mostrarTodos;  
  renderComentarios();            
});
let mostrarTodos = false;
  function renderComentarios() {
  let dados = JSON.parse(localStorage.getItem("comentarios")) || {};
  let comentarios = dados[videoAtual] || [];
  listaComentarios.innerHTML = "";
  let lista = mostrarTodos ? comentarios : comentarios.slice(0, 1);
  lista.forEach(texto => {
    let div = document.createElement("div");
    div.className = "comentario";
    div.textContent = texto;
    listaComentarios.appendChild(div);
  });
}
  btnEnviar.addEventListener("click", () => {
  let texto = inputComentario.value.trim();
  if (!texto) return;
  let dados = JSON.parse(localStorage.getItem("comentarios")) || {};
  if (!dados[videoAtual]) {
    dados[videoAtual] = [];
  }
  dados[videoAtual].unshift(texto);
  localStorage.setItem("comentarios", JSON.stringify(dados));
  inputComentario.value = "";
  renderComentarios();
});