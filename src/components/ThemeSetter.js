import React, { useContext } from "react";
import ThemeContext from "./Contexts/ThemeContext";

export const ThemeSetter = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="navbar_themes">
      <button className="themeButton lightT" aria-label="light theme" onClick={() => setTheme("light")}></button>
      <button className="themeButton darkT" aria-label="dark theme" onClick={() => setTheme("dark")}></button>
    </div>
  );
};
