import { useState } from "react";

function useToken() {
  const [token, setToken] = useState(
    window.localStorage.getItem("vernal_token")
  );

  function handleLogin(token) {
    setToken(token);
    window.localStorage.setItem("vernal_token", token);
  }

  function handleLogout() {
    setToken(null);
    window.localStorage.removeItem("vernal_token");
  }

  return [token, handleLogin, handleLogout];
}

export default useToken;
