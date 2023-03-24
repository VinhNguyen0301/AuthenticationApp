export function getAuthToken() {
  const token = localStorage.getItem("Token");
  return token;
}
