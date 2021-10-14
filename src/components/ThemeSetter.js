import React, { useContext } from "react";
import ThemeContext from "./Contexts/ThemeContext";

export const ThemeSetter = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="navbar_themes">
      <div className="themeButton lightT" onClick={() => setTheme("light")}></div>
      <div className="themeButton darkT" onClick={() => setTheme("dark")}></div>
    </div>
  );
};
