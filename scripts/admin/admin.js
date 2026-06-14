const buttons = document.querySelectorAll("[data-section]");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    const target = btn.dataset.section;

    sections.forEach(sec => {
      sec.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");
  });
});

// ------------------------ LOAD STUDENT ------------------------
import { loadStudents } from "./student.js";

loadStudents();

// ------------------------ LOGOUT ------------------------
document.getElementById("logoutBtn").addEventListener("click", async () => {
  await supabase.auth.signOut();
  localStorage.clear()
  window.location.href = "/login.html";
});