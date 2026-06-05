import { register, login } from "../services/auth.js";

const form = document.querySelector("#login-form");
const form_goal = document.querySelectorAll(".goal");
const submit_btn = document.querySelector(".submit_btn");
let goal = "login";

form_goal.forEach((btn) => {
  btn.addEventListener("click", () => {
    goal = goal === "login" ? "register" : "login";
    form_goal.forEach((btn) => {
      btn.classList.toggle("active");
    });
    submit_btn.textContent =
      submit_btn.textContent === "Entrar" ? "Cadastrar" : "Entrar";
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  if (goal === "login") {
    const { success, error } = await login(email, password);
    return success ? (window.location.href = "index.html") : alert(error);
  } else if (goal === "register") {
    const { success, error } = await register(email, password);
    return success ? (window.location.href = "index.html") : alert(error);
  }
});
