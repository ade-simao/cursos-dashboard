import { isLogged } from "./auth.js";

const user = isLogged();

if (!user) {
    window.location.href = 'login.html';
} else {
    window.addEventListener('DOMContentLoaded', () => {
        document.body.style.display = 'block';
    });
}