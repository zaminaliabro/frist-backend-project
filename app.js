import { findUser } from "./helper.js";

const signupBtn = document.getElementById("signupBtn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    alert("Please fill in all fields.");
    return;
  }
  const isUserExisting = findUser(email.value);
  if (isUserExisting) {
    alert("User already exists with this email ");
    return;
  }

  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful");
  window.location.href = "login.html";
});
