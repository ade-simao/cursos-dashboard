import { getCurrentUser, logout } from "../services/auth.js";

const profile = await getCurrentUser();

if (!profile && !window.location.pathname.endsWith("login.html")) {
  window.location.href = "login.html";
}

if (
  profile?.role !== "admin" &&
  window.location.pathname.endsWith("admin.html")
) {
  window.location.href = "/";
}

if (
  profile?.role === "admin" &&
  !window.location.pathname.endsWith("admin.html")
) {
  window.location.href = "/admin.html";
}

setTimeout(() => {
  document.body.hidden = false;
}, 3000);

const logoutBtn = document.querySelector("#logout");

logoutBtn?.addEventListener("click", () => {
  logout();
  localStorage.removeItem("sb-uczyzxljqufhfveatpqt-auth-token");
  window.location.href = "login.html";
});
