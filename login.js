import { finder1 } from "./helper.js";
import { createTokenWithExpiry, saveToken } from "./token.js";

const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    alert("Please fill in all fields.");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  const user = finder1(email.value);

  if (!user) {
    alert("User not found ");
    return;
  }

  if (user.password === password.value) {
    const currentUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    alert("Login successful ");

    const tokenObj = createTokenWithExpiry(10, 1);
    saveToken(tokenObj);
    console.log("Token created:", tokenObj);

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "user.html";
  } else {
    alert("Wrong password ");
  }
});
