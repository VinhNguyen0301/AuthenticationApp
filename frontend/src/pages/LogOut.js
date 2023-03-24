import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("Token");
  localStorage.removeItem("Expiration");

  return redirect;
}
