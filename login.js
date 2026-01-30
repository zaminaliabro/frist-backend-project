import { finder1 } from "./helper.js";
import { createTokenWithExpiry, saveToken } from "./token.js";

const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const user = finder1(email.value);

  if (user && user.password === password.value) {
    const currentUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    const tokenObj = createTokenWithExpiry(10, 1);
    saveToken(tokenObj);
    console.log("Token created:", tokenObj);

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    window.location.href = "user.html";
  }
});
