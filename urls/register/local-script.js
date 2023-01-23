import data, { formatter } from "../../public/js/globaldb.js";
import { init_header, init_footer } from "../../public/js/globalfunc.js";

document.addEventListener("DOMContentLoaded", () => {
  init_header();
  init_footer();

  const loginForm = document.getElementById("register-form");

  loginForm.addEventListener("submit", (e) => register(e));
});

function register(e) {
  e.preventDefault();

  const errMsg = document.getElementById("err-msg");
  const data = new FormData(e.target);

  errMsg.innerHTML = "";

  const username = data.get("username");
  const password = data.get("password");
  const passwordConf = data.get("password_conf");

  if (password != passwordConf) {
    errMsg.innerHTML = "Konfirmasi password berbeda";
    return;
  }
  let _users_data = [{ username: username, password: password }];

  let prevData = JSON.parse(localStorage.getItem("_users_data"));

  if (prevData != null) _users_data = _users_data.concat(prevData);

  localStorage.setItem("_users_data", JSON.stringify(_users_data));

  alert("Akun dengan username " + username + " berhasil didaftarkan!");

  window.location.href = "/urls/login";
}
