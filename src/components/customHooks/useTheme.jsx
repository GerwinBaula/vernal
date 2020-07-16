import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("vernal_theme") || "dark"
  );

  function handleThemeChange() {
    if (theme === "dark") {
      setTheme("light");
      window.localStorage.setItem("vernal_theme", "light");
      return;
    } else {
      setTheme("dark");
      window.localStorage.setItem("vernal_theme", "dark");
      return;
    }
  }

  return [theme, handleThemeChange];
}

export default useTheme;
