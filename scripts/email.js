


/*VALIDAÇÃO DO EMAIL*/

function validateEmail() {
  var email = document.getElementById("email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Regex para validar email
  if (email.match(pattern)) {
      alert("Email válido! Você se inscreveu com sucesso.");
      return true;
  } else {
      alert("Por favor, insira um email válido.");
      return false;
  }
}