export function finder1(email) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export function findUser(email) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}
