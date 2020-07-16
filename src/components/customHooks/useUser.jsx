import { useState } from "react";

function useUser() {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("vernal_user")) || {}
  );

  function handleUserReceive(user) {
    setUser(user);
    window.localStorage.setItem("vernal_user", JSON.stringify(user));
  }

  function handleUserRemove() {
    setUser({});
    window.localStorage.removeItem("vernal_user");
  }

  return [user, handleUserReceive, handleUserRemove];
}

export default useUser;
