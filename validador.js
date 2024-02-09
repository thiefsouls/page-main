function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  return password.length >= 8 && hasLower && hasUpper && hasNumber && hasSpecial;
}

const emailValido = "teste@teste.com.br";
const senhaValida = "123456";

function validateLoginForm() {
  const email = document.getElementById('emailForm').value;
  const password = document.getElementById('passwordForm').value;
  const emailError = document.getElementById('email-error');


  if (email === emailValido && senha === senhaValida) {
    // Sucesso! Redirecionar para outra página.
    window.location.href = "sucesso.html";
  } else {
    mensagemErro.textContent = "Email ou senha inválidos.";
  }
}





