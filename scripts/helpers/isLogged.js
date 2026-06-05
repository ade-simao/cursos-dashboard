import { isLogged } from "../services/auth.js";

const user = await isLogged();

if (!user) {
  window.location.href = "login.html";
} else {
  window.addEventListener("DOMContentLoaded", () => {
    document.body.style.display = "block";
    document.querySelector("h2").textContent = `Bem-vindo, ${user.email}`;
  });
}

const logoutBtn = document.querySelector("button");

logoutBtn.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "login.html";
})