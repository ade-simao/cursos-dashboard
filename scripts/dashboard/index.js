import { isLogged } from "../helpers/auth.js";

const user = isLogged();

if (!user) {
    window.location.href = 'login.html';
}