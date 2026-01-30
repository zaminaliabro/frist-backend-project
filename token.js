export const createTokenWithExpiry = (len = 6, min = 1) => {
  const token = Math.random()
    .toString(36)
    .slice(2, 2 + len);
  const expiry = new Date(Date.now() + min * 60000).toISOString();
  return { token, expiry };
};

export const saveToken = (t) =>
  localStorage.setItem("authToken", JSON.stringify(t));

export const getToken = () => JSON.parse(localStorage.getItem("authToken"));

export const removeToken = () => localStorage.removeItem("authToken");

export const isTokenValid = (t) => !!t && new Date() < new Date(t.expiry);
