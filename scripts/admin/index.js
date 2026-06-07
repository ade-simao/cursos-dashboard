// import { supabase } from "./supabase.js";

// // ------------------------
// // AUTH GUARD
// // ------------------------
// async function checkAdmin() {
//   const { data: { user } } = await supabase.auth.getUser();

//   if (!user) {
//     window.location.href = "/login.html";
//     return;
//   }

//   const { data: profile } = await supabase
//     .from("profiles")
//     .select("*")
//     .eq("user_id", user.id)
//     .single();

//   if (!profile || profile.role !== "admin") {
//     window.location.href = "/index.html";
//   }
// }

// checkAdmin();

// ------------------------
// NAVIGATION
// ------------------------
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

// ------------------------
// LOGOUT
// ------------------------
// document.getElementById("logoutBtn").addEventListener("click", async () => {
//   await supabase.auth.signOut();
//   window.location.href = "/login.html";
// });