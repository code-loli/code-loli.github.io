import data, { formatter } from "../../public/js/globaldb.js";
import { init_header, init_footer } from "../../public/js/globalfunc.js";

document.addEventListener("DOMContentLoaded", () => {
  init_header();
  init_footer();

  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (e) => login(e));
});

function login(e) {
  e.preventDefault();

  const errMsg = document.getElementById("err-msg");
  const data = new FormData(e.target);

  errMsg.innerHTML = "";

  const user_data = Array.from(JSON.parse(localStorage.getItem("_users_data")));

  const username = data.get("username");
  const password = data.get("password");

  for (let i = 0; i < user_data.length; i++) {
    if (user_data[i].username == username && user_data[i].password == password) {
      localStorage.setItem("username", username);
      alert("Berhasil login sebagai " + username);
      window.location.href = "/";
      return;
    }
  }

  errMsg.innerHTML = "Username atau password salah";
}
