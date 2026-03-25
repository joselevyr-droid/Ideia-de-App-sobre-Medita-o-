const inputEmail = document.getElementById("emailLogin");
const inputSenha = document.getElementById("senhaLogin");
const btnLogin = document.getElementById("btnLogin");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");
let usuariosCadastrados = JSON.parse(localStorage.getItem("usuariosCadastrados")) || {};
let pagantes = JSON.parse(localStorage.getItem("pagantes")) || ["fulano@gmail.com", "beltrano@gmail.com"];
const ultimoEmail = localStorage.getItem("ultimoEmail");
const ultimaSenha = localStorage.getItem("ultimaSenha");
if (ultimoEmail) inputEmail.value = ultimoEmail;
if (ultimaSenha) inputSenha.value = ultimaSenha;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  erroEmail.style.display = "none";
  erroSenha.style.display = "none";
  const email = inputEmail.value.trim().toLowerCase();
  const senha = inputSenha.value.trim();
  if (!email.endsWith("@gmail.com")) {
    erroEmail.textContent = "O email precisa terminar com @gmail.com";
    erroEmail.style.display = "block";
    return;
  }
  if (senha.length < 4 || senha.length > 6) {
    erroSenha.textContent = "A senha deve ter entre 4 e 6 dígitos";
    erroSenha.style.display = "block";
    return;
  }
  localStorage.setItem("ultimoEmail", email);
  localStorage.setItem("ultimaSenha", senha);
  if (!usuariosCadastrados[email]) {
    usuariosCadastrados[email] = senha;
    localStorage.setItem("usuariosCadastrados", JSON.stringify(usuariosCadastrados));
  }
  localStorage.setItem("usuarioLogado", email);
  if (localStorage.getItem("redirecionarParaCurso")) {
    localStorage.removeItem("redirecionarParaCurso");
    if (pagantes.includes(email)) {
      window.location.href = "curso.html";  
    } else {
      window.location.href = "pagamento.html"; 
    }
  } else {
    window.location.href = "index.html"; 
  }
});