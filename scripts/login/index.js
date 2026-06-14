import { login } from "../services/auth.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;
  const btn = form.btn;

  btn.innerText = "Verificando...";

  const { success, error, role } = await login(email, password);

  btn.innerText = success ? "Válido" : "Entrar";

  return success
    ? (window.location.href = role === "admin" ? "admin.html" : "/")
    : alert(error);
});
