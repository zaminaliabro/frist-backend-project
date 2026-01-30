import { getToken, isTokenValid, removeToken } from "./token.js";

const user = JSON.parse(localStorage.getItem("currentUser"));

const avatar = document.getElementById("avatar");
const dropdown = document.getElementById("dropdown");
const userFullName = document.getElementById("userFullName");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");
const userBox = document.getElementById("userBox");

if (!user) {
  window.location.href = "login.html";
}

avatar.innerText = user.firstName.charAt(0);
userFullName.innerText = user.firstName + " " + user.lastName;
userEmail.innerText = user.email;

userBox.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  removeToken();
  window.location.href = "login.html";
});

let loggedOut = false;

function autoLogout() {
  if (loggedOut) return;

  const tokenObj = getToken();

  if (!tokenObj || !isTokenValid(tokenObj)) {
    loggedOut = true;
    removeToken();
    localStorage.removeItem("currentUser");
    alert("Session expired. You have been logged out.");
    window.location.href = "login.html";
  }
}

setInterval(autoLogout, 2000);
